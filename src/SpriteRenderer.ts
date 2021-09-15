import CanvasRenderer from "./CanvasRenderer";
import Game, { Direction } from "./Game";

const sprite = {
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

export default class SpriteRenderer extends CanvasRenderer {
  protected withCanvas(canvas: HTMLCanvasElement, game: Game) {
    canvas.width = game.cols * sprite.size
    canvas.height = game.rows * sprite.size
  }

  protected drawBoard() {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.cols; y++) {
        this.ctx.fillStyle = (x + y) % 2 === 0 ? '#d9f99d' : '#ecfccb'
        this.ctx.fillRect(x * sprite.size, y * sprite.size, sprite.size, sprite.size)
      }
    }
  }

  protected drawSnake(snake) {
    snake.forEach((position, i) => {
      let type;
      if (i === 0) {
        type = `head${position.direction}`
      } else if (i === snake.length - 1) {
        type = `tail${snake[i - 1].direction}`
      } else {
        type = position.direction + snake[i - 1].direction
      }

      this.drawSprite(type, position)
    })
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
}