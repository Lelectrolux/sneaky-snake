import BaseRenderer from "./BaseRenderer";
import Game, { GameState, Position, Snake } from "./Game";

export default abstract class CanvasRenderer extends BaseRenderer {
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
    this.drawScore(state)
  }

  protected abstract withCanvas(canvas: HTMLCanvasElement, game: Game);
  protected abstract drawBoard();
  protected abstract drawSnake(snake: Snake);
  protected abstract drawApple(position: Position);
  protected drawScore(state: GameState) {}
}