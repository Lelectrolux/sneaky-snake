import { Emitter } from "mitt";

export default class SquareRenderer {
  /** @type number */
  cols
  /** @type number */
  rows
  /** @type number */
  cellSize
  /** @type number */
  gapSize

  /** @type HTMLCanvasElement */
  canvas
  /** @type CanvasRenderingContext2D */
  ctx

  /**
   * @param {Game} game
   * @param {HTMLCanvasElement} canvas
   */
  constructor(game, canvas) {
    this.cols = game.cols
    this.rows = game.rows
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    let width = canvas.parentElement.scrollWidth
    let height = canvas.parentElement.scrollHeight
    this.cellSize = width / height > this.cols / this.rows
        ? Math.floor((height / this.rows) / 10) * 10
        : Math.floor((width / this.cols) / 10) * 10
    this.gapSize = Math.floor(this.cellSize / 10)
    canvas.width = this.cols * this.cellSize
    canvas.height = this.rows * this.cellSize
    this.redraw(game.state)
    this.#addListeners(game.events)
  }

  /** @param {GameState} state */
  redraw(state) {
    this.clearBoard()
    this.drawSnake(state.snake)
    this.drawApple(state.apple)
  }

  drawSnake(snake) {
    snake.forEach((position, i) => {
      this.ctx.fillStyle = i === 0 ? '#16A34A': '#22C55E'
      let coords = {
        x: position.x * this.cellSize + this.gapSize,
        y: position.y * this.cellSize + this.gapSize,
        w: this.cellSize - (this.gapSize * 2),
        h: this.cellSize - (this.gapSize * 2)
      }

      // Add extension to keep snake cells linked to each other
      if (snake.length !== i + 1) {
        if (position.direction === 'up') {
          coords.h += this.gapSize * 2
        } else if (position.direction === 'down') {
          coords.y -= this.gapSize * 2
          coords.h += this.gapSize * 2
        } else if (position.direction === 'left') {
          coords.w += this.gapSize * 2
        } else if (position.direction === 'right') {
          coords.x -= this.gapSize * 2
          coords.w += this.gapSize * 2
        }
      }

      this.ctx.fillRect(coords.x, coords.y, coords.w, coords.h)
    })
  }

  drawApple(position) {
    this.ctx.fillStyle = '#EF4444'
    this.ctx.strokeStyle = '#DC2626'
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

  clearBoard() {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.cols; y++) {
        this.ctx.fillStyle = (x + y)%2 === 0 ? '#FEF3C7' : '#FFFBEB'
        this.ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize)
      }
    }
  }

  /** @param {Emitter<Events>} events */
  #addListeners(events) {
    events.on('afterTick', state => this.redraw(state))
  }
}