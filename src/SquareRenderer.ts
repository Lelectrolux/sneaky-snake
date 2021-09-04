import Game, { Direction, GameState, Position, Snake } from "./Game";

export default class SquareRenderer {
  cols: number
  rows: number
  cellSize: number
  gapSize: number
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(game: Game, canvas: HTMLCanvasElement) {
    this.cols = game.cols
    this.rows = game.rows
    this.canvas = canvas
    // @ts-ignore Type 'CanvasRenderingContext2D | null' is not assignable to type 'CanvasRenderingContext2D'.   Type 'null' is not assignable to type 'CanvasRenderingContext2D'.
    this.ctx = this.canvas.getContext('2d')

    let width = canvas.parentElement?.scrollWidth ?? (game.rows * 10)
    let height = canvas.parentElement?.scrollHeight ?? (game.cols * 10)

    this.cellSize = width / height > this.cols / this.rows
        ? Math.floor((height / this.rows) / 10) * 10
        : Math.floor((width / this.cols) / 10) * 10
    this.gapSize = Math.floor(this.cellSize / 10)

    canvas.width = this.cols * this.cellSize
    canvas.height = this.rows * this.cellSize

    this.redraw(game.state)
    game.events.on('afterTick', state => this.redraw(state))
  }

  public redraw(state: GameState) {
    this.clearBoard()
    this.drawSnake(state.snake)
    this.drawApple(state.apple)
  }

  protected drawSnake(snake: Snake) {
    snake.forEach(({ x, y, direction }, i) => {
      this.ctx.fillStyle = i === 0 ? '#16a34a' : '#22c55e'
      let coords = {
        x: x * this.cellSize + this.gapSize,
        y: y * this.cellSize + this.gapSize,
        w: this.cellSize - (this.gapSize * 2),
        h: this.cellSize - (this.gapSize * 2)
      }

      // Add extension to keep snake cells linked to each other
      if (snake.length !== i + 1) {
        if (direction === Direction.Up) {
          coords.h += this.gapSize * 2
        } else if (direction === Direction.Down) {
          coords.y -= this.gapSize * 2
          coords.h += this.gapSize * 2
        } else if (direction === Direction.Left) {
          coords.w += this.gapSize * 2
        } else if (direction === Direction.Right) {
          coords.x -= this.gapSize * 2
          coords.w += this.gapSize * 2
        }
      }

      this.ctx.fillRect(coords.x, coords.y, coords.w, coords.h)
    })
  }

  protected drawApple(position: Position) {
    this.ctx.fillStyle = '#ef4444'
    this.ctx.strokeStyle = '#dc2626'
    this.ctx.lineWidth = this.gapSize;
    this.ctx.beginPath();
    this.ctx.arc(
        (position.x + .5) * this.cellSize,
        (position.y + .5) * this.cellSize,
        Math.floor((this.cellSize / 2) - this.gapSize * 2),
        0,
        2 * Math.PI);
    this.ctx.fill();
    this.ctx.stroke();
  }

  protected clearBoard() {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.cols; y++) {
        this.ctx.fillStyle = (x + y) % 2 === 0 ? '#fef3c7' : '#fffbeb'
        this.ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize)
      }
    }
  }
}