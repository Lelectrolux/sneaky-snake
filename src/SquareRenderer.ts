import BaseRenderer from "./BaseRenderer";
import Game, { Direction, GameState, Position, Snake } from "./Game";

const cell = 16
const gap = 2

export default class SquareRenderer extends BaseRenderer {
  protected cols: number
  protected rows: number
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D

  public constructor(game: Game, canvas: HTMLCanvasElement) {
    super()
    this.cols = game.cols
    this.rows = game.rows
    this.canvas = canvas
    // @ts-ignore Type 'CanvasRenderingContext2D | null' is not assignable to type 'CanvasRenderingContext2D'.   Type 'null' is not assignable to type 'CanvasRenderingContext2D'.
    this.ctx = this.canvas.getContext('2d')

    this.withCanvas(canvas, game)

    this.init(game)
  }

  public render(state: GameState) {
    this.drawBoard()
    this.drawSnake(state.snake)
    this.drawApple(state.apple)
  }

  protected withCanvas(canvas: HTMLCanvasElement, game: Game) {
    canvas.width = game.cols * cell
    canvas.height = game.rows * cell
    canvas.style.imageRendering = 'pixelated'
  }

  protected drawSnake(snake: Snake) {
    snake.forEach(({ x, y, direction }, i) => {
      this.ctx.fillStyle = i === 0 ? '#16a34a' : '#22c55e'
      let coords = {
        x: x * cell + gap,
        y: y * cell + gap,
        w: cell - (gap * 2),
        h: cell - (gap * 2)
      }

      // Add extension to keep snake cells linked to each other
      if (snake.length !== i + 1) {
        if (direction === Direction.Up) {
          coords.h += gap * 2
        } else if (direction === Direction.Down) {
          coords.y -= gap * 2
          coords.h += gap * 2
        } else if (direction === Direction.Left) {
          coords.w += gap * 2
        } else if (direction === Direction.Right) {
          coords.x -= gap * 2
          coords.w += gap * 2
        }
      }

      this.ctx.fillRect(coords.x, coords.y, coords.w, coords.h)
    })
  }

  protected drawApple(position: Position) {
    this.ctx.fillStyle = '#ef4444'
    this.ctx.fillRect(
        position.x * cell + gap,
        position.y * cell + gap,
        cell - (gap * 2),
        cell - (gap * 2),
    )
  }

  protected drawBoard() {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.ctx.fillStyle = (x + y) % 2 === 0 ? '#fef3c7' : '#fffbeb'
        this.ctx.fillRect(x * cell, y * cell, cell, cell)
      }
    }
  }
}