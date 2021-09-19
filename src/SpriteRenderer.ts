import Game, { Direction, GameState } from "./Game"

function createSprite() {
  let sprite = {
    img: document.createElement('img'),
    size: 64,
    map: {
      apple: [3, 2],

      [`head${Direction.Up}`]: [0, 0],
      [`head${Direction.Down}`]: [0, 1],
      [`head${Direction.Left}`]: [0, 2],
      [`head${Direction.Right}`]: [0, 3],

      [`tail${Direction.Up}`]: [1, 0],
      [`tail${Direction.Down}`]: [1, 1],
      [`tail${Direction.Left}`]: [1, 2],
      [`tail${Direction.Right}`]: [1, 3],

      [`${Direction.Up}${Direction.Left}`]: [2, 0],
      [`${Direction.Up}${Direction.Right}`]: [2, 1],
      [`${Direction.Down}${Direction.Left}`]: [2, 2],
      [`${Direction.Down}${Direction.Right}`]: [2, 3],
      [`${Direction.Left}${Direction.Up}`]: [2, 3],
      [`${Direction.Right}${Direction.Up}`]: [2, 2],
      [`${Direction.Left}${Direction.Down}`]: [2, 1],
      [`${Direction.Right}${Direction.Down}`]: [2, 0],

      [`${Direction.Up}${Direction.Up}`]: [3, 0],
      [`${Direction.Down}${Direction.Down}`]: [3, 0],
      [`${Direction.Left}${Direction.Left}`]: [3, 1],
      [`${Direction.Right}${Direction.Right}`]: [3, 1],
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

    canvas.width = game.cols * sprite.size
    canvas.height = (game.rows + 1) * sprite.size
    this.canvas = canvas
    // @ts-ignore Type 'CanvasRenderingContext2D | null' is not assignable to type 'CanvasRenderingContext2D'.   Type 'null' is not assignable to type 'CanvasRenderingContext2D'.
    this.ctx = this.canvas.getContext('2d')

    this.render(game.state)
    game.events.on('afterTick', state => this.render(state))
    game.events.on('pause', state => this.render(state))
    game.events.on('play', state => this.render(state))
    game.events.on('lost', state => this.render(state))
  }

  public render(state: GameState) {
    this.drawBoard(state)
    this.drawSnake(state)
    this.drawApple(state.apple)
    this.drawScore(state)

    if (!state.lost && !state.running) {
      this.ctx.fillStyle = 'green'
      this.ctx.font = `${sprite.size * 1.5}px monospace`
      this.ctx.fillStyle = 'black'
      this.ctx.textAlign = 'center'
      this.ctx.textBaseline = 'middle'
      this.ctx.fillText('▶️', (this.cols / 2) * sprite.size, (this.rows / 2) * sprite.size)
    }
  }

  protected drawBoard(state: GameState) {
    if (!state.lost && !state.running) {
      this.ctx.filter = 'grayscale(75%)'
    }
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.ctx.fillStyle = (x + y) % 2 === 0 ? '#d9f99d' : '#ecfccb'
        this.ctx.fillRect(x * sprite.size, y * sprite.size, sprite.size, sprite.size)
      }
    }
    this.ctx.filter = 'none'
  }

  protected drawSnake({ snake, lost }: GameState) {
    if (lost) {
      this.ctx.filter = 'grayscale(100%)'
    }
    snake.reverse().forEach((position, i) => {
      let type;
      if (i === snake.length - 1) {
        type = `head${position.direction}`
      } else if (i === 0) {
        type = `tail${snake[i + 1].direction}`
      } else {
        type = position.direction + snake[i + 1].direction
      }
      this.drawSprite(type, position)
    })
    this.ctx.filter = 'none'
  }

  protected drawApple(position) {
    this.drawSprite('apple', position)
  }

  protected drawSprite(type, position) {
    this.ctx.drawImage(
        sprite.img,
        ...<[number, number]>(sprite.map[type]),
        sprite.size,
        sprite.size,
        position.x * sprite.size,
        position.y * sprite.size,
        sprite.size,
        sprite.size
    )
  }

  protected drawScore({ score, ticks, direction }: GameState) {
    this.ctx.clearRect(0, this.rows * sprite.size, this.cols * sprite.size, sprite.size)
    this.ctx.font = `${sprite.size * .75}px monospace`
    this.ctx.fillStyle = 'black'
    this.ctx.textAlign = 'left'
    this.ctx.textBaseline = 'top'
    this.ctx.fillText(`${score}`, sprite.size, (this.rows + .25) * sprite.size)
    this.drawApple({ x: 0, y: this.rows })

    this.ctx.textAlign = 'right'
    this.ctx.fillText(direction, (this.cols) * sprite.size, (this.rows + .2) * sprite.size)

    this.ctx.textAlign = 'center'
    this.ctx.fillText(`⏱${ticks}`, (this.cols / 2) * sprite.size, (this.rows + .2) * sprite.size)
  }
}