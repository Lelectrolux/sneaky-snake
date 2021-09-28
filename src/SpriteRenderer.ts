import Game, { Direction, GameState, Position, SnakeSegment } from "./Game"

const { Up, Right, Down, Left } = Direction

function createSprite() {
  let sprite = {
    img: document.createElement('img'),
    size: 64,
    map: {
      apple: [3, 2],
      cherry: [3, 3],

      [`head${Up}`]: [0, 0],
      [`head${Right}`]: [0, 1],
      [`head${Down}`]: [0, 2],
      [`head${Left}`]: [0, 3],

      [`tail${Up}`]: [1, 0],
      [`tail${Right}`]: [1, 1],
      [`tail${Down}`]: [1, 2],
      [`tail${Left}`]: [1, 3],

      [Up + Right]: [2, 0],
      [Left + Down]: [2, 0],
      [Right + Down]: [2, 1],
      [Up + Left]: [2, 1],
      [Down + Left]: [2, 2],
      [Right + Up]: [2, 2],
      [Left + Up]: [2, 3],
      [Down + Right]: [2, 3],

      [Up + Up]: [3, 0],
      [Down + Down]: [3, 0],
      [Left + Left]: [3, 1],
      [Right + Right]: [3, 1],
    } as Record<string, [number, number]>
  }

  Object.keys(sprite.map).forEach(key => {
    // @ts-ignore
    sprite.map[key] = sprite.map[key].map(pos => pos * sprite.size)
  })

  sprite.img.src = './SpriteSheet.svg'

  Object.freeze(sprite.map)

  return sprite
}

const sprite = createSprite()

export default class SpriteRenderer {
  protected cols: number
  protected rows: number
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D

  public constructor(game: Game, canvas: HTMLCanvasElement) {
    this.cols = game.cols
    this.rows = game.rows
    canvas.width = (game.cols + 2) * sprite.size
    canvas.height = (game.rows + 4) * sprite.size
    this.canvas = canvas
    // @ts-ignore Type 'CanvasRenderingContext2D | null' is not assignable to type 'CanvasRenderingContext2D'.   Type 'null' is not assignable to type 'CanvasRenderingContext2D'.
    this.ctx = this.canvas.getContext('2d')
    this.ctx.font = `${sprite.size * .8}px monospace`
    this.ctx.textAlign = 'left'
    this.ctx.textBaseline = 'top'
    this.ctx.save()

    this.createBackgroundImage()

    this.render(game.state)

    game.events.on('afterTick', state => this.render(state))
    game.events.on('pause', () => {
      this.ctx.resetTransform()
      this.ctx.save()
      this.ctx.textAlign = 'center'
      this.ctx.textBaseline = 'middle'
      this.ctx.font = `${sprite.size * 2}px monospace`
      this.ctx.fillText('▶️', this.canvas.width / 2, this.canvas.height / 2)
      this.ctx.restore()
    })
    game.events.on('play', state => this.render(state))
    game.events.on('lost', state => this.render(state))
    game.events.on('directionChanged', state => this.drawDirection(state.direction))
  }

  public render(state: GameState) {
    this.drawStats(state)
    this.drawSprites(state)
  }

  protected createBackgroundImage() {
    // checkerboard
    this.ctx.fillStyle = '#f9fafb'
    this.ctx.fillRect(
        sprite.size * .5, sprite.size * .5,
        this.canvas.width - sprite.size, this.canvas.height - (.5 * sprite.size))
    this.ctx.fillStyle = '#f3f4f6'
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        if ((x + y) % 2 === 0) {
          this.ctx.fillRect((x + 1) * sprite.size, (y + 3) * sprite.size, sprite.size, sprite.size)
        }
      }
    }

    this.ctx.filter = 'hue-rotate(-90deg)'
    // vertical border
    for (let i = 1; i < this.rows + 3; i++) {
      this.drawSprite(Up + Up, { x: 0, y: i })
      this.drawSprite(Up + Up, { x: this.cols + 1, y: i })
    }

    // horizontal border
    for (let i = 1; i < this.cols + 1; i++) {
      this.drawSprite(Right + Right, { x: i, y: 0 })
      this.drawSprite(Right + Right, { x: i, y: 2 })
      this.drawSprite(Right + Right, { x: i, y: this.rows + 3 })
    }

    this.ctx.clearRect((this.cols + 1) * sprite.size, 2 * sprite.size, sprite.size, sprite.size)
    this.drawSprite(`tail${Down}`, { x: this.cols + 1, y: 2 })

    // border corners
    this.drawSprite(Up + Right, { x: 0, y: 0 })
    this.drawSprite(Up + Left, { x: this.cols + 1, y: 0 })
    this.drawSprite(Down + Left, { x: this.cols + 1, y: 2 })
    this.drawSprite(Down + Right, { x: 0, y: this.rows + 3 })
    this.drawSprite(Down + Left, { x: this.cols + 1, y: this.rows + 3 })

    // border head
    this.drawSprite(`head${Left}`, { x: 0, y: 2 })
    this.ctx.filter = 'none'

    this.ctx.restore()
    this.ctx.fillText('🏆', sprite.size, 1.2 * sprite.size, sprite.size)
    this.ctx.fillText('⏱', (this.canvas.width - (2 * sprite.size)) / 2, 1.2 * sprite.size, sprite.size)

    // Set content as backgroundImage
    this.canvas.style.backgroundImage = `url("${this.canvas.toDataURL()}")`
    this.canvas.style.backgroundSize = `100%`

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  protected drawSprites({ snake, lost, touch, apple, cherry, size }: GameState) {
    this.ctx.setTransform(1, 0, 0, 1, sprite.size, 3 * sprite.size)
    this.ctx.clearRect(0, 0, this.cols * sprite.size, this.rows * sprite.size)

    if (touch) {
      this.ctx.filter = 'grayscale(60%)'
    }

    if (lost) {
      snake = [touch as SnakeSegment, ...snake]
      if (snake.length > size) {
        snake.length--
      }
    }

    for (let i = snake.length - 1; i >= 0; i--) {
      let type;
      if (i === 0) {
        type = `head${snake[i].direction}`
      } else if (i === snake.length - 1) {
        type = `tail${snake[i - 1].direction}`
      } else {
        type = snake[i].direction + snake[i - 1].direction
      }
      this.drawSprite(type, snake[i])
    }
    this.ctx.filter = 'none'

    this.drawSprite('apple', apple)

    if (cherry) {
      let grayscale = (10 - Math.min(cherry[1], 10)) * 10
      this.ctx.filter = `grayscale(${grayscale}%)`
      this.drawSprite('cherry', cherry[0])
      this.ctx.filter = 'none'
    }
  }

  protected drawSprite(type: string, position: Position) {
    this.ctx.drawImage(
        sprite.img,
        ...sprite.map[type],
        sprite.size,
        sprite.size,
        position.x * sprite.size,
        position.y * sprite.size,
        sprite.size,
        sprite.size
    )
  }

  protected drawStats({ score, ticks, direction }: GameState) {
    let maxWidth = ((this.cols - 4) * sprite.size) / 2
    this.drawScore(score, maxWidth)
    this.drawTicks(ticks, maxWidth)
    this.drawDirection(direction)
  }

  protected drawScore(score: number, maxWidth: number) {
    this.ctx.setTransform(1, 0, 0, 1, sprite.size, sprite.size)
    this.ctx.clearRect(0, 0, maxWidth, sprite.size)
    this.ctx.fillText(`${score}`, sprite.size, .2 * sprite.size, maxWidth)
  }

  protected drawTicks(ticks: number, maxWidth: number) {
    this.ctx.setTransform(1, 0, 0, 1, this.canvas.width / 2, sprite.size)
    this.ctx.clearRect(0, 0, maxWidth, sprite.size)
    this.ctx.fillText(`${ticks}`, 0, .2 * sprite.size, maxWidth)
  }

  protected drawDirection(direction: Direction) {
    this.ctx.setTransform(1, 0, 0, 1, this.canvas.width - (2 * sprite.size), sprite.size)
    this.ctx.clearRect(0, 0, sprite.size, sprite.size)
    this.ctx.fillText(direction, 0, .2 * sprite.size, sprite.size)
  }
}