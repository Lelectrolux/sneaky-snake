export default class Renderer2d {
  /** @type number */
  #cols
  /** @type number */
  #rows
  /** @type number */
  #cellSize
  /** @type number */
  #gapSize

  /** @type HTMLCanvasElement */
  #domElement
  /** @type CanvasRenderingContext2D */
  #ctx

  /**
   * @param {number} cols
   * @param {number} rows
   */
  constructor(cols, rows) {
    this.#cols = cols
    this.#rows = rows
    this.#domElement = document.createElement('canvas')
    this.#ctx = this.#domElement.getContext('2d')
  }

  init() {
    let width = this.#domElement.parentElement.scrollWidth
    let height = this.#domElement.parentElement.scrollHeight

    this.#cellSize = width / height > this.#cols / this.#rows
        ? Math.floor((height / this.#rows) / 16) * 16
        : Math.floor((width / this.#cols) / 16) * 16

    this.#gapSize = Math.floor(this.#cellSize / 16)

    this.#domElement.width = this.#cellSize * this.#cols
    this.#domElement.height = this.#cellSize * this.#rows
  }

  get domElement() {
    return this.#domElement
  }

  /** @param {GameState} state */
  redraw(state) {
    this.#clearBoard()
    this.#drawSnake(state.snake)
    this.#drawApple(state.apple)
  }

  #drawSnake(snake) {
    snake.forEach((position, i) => {
      this.#ctx.fillStyle = i === 0 ? 'white': 'lightgray'
      let coords = {
        x: position.x * this.#cellSize + this.#gapSize,
        y: position.y * this.#cellSize + this.#gapSize,
        w: this.#cellSize - (this.#gapSize * 2),
        h: this.#cellSize - (this.#gapSize * 2)
      }

      // Add extension to keep snake cells linked to each other
      if (snake.length !== i + 1) {
        if (position.direction === 'up') {
          coords.h += this.#gapSize * 2
        } else if (position.direction === 'down') {
          coords.y -= this.#gapSize * 2
          coords.h += this.#gapSize * 2
        } else if (position.direction === 'left') {
          coords.w += this.#gapSize * 2
        } else if (position.direction === 'right') {
          coords.x -= this.#gapSize * 2
          coords.w += this.#gapSize * 2
        }
      }

      this.#ctx.fillRect(coords.x, coords.y, coords.w, coords.h)
    })
  }

  #drawApple(position) {
    this.#ctx.fillStyle = 'red'
    this.#ctx.fillRect(
        position.x * this.#cellSize + this.#gapSize,
        position.y * this.#cellSize + this.#gapSize,
        this.#cellSize - (this.#gapSize * 2),
        this.#cellSize - (this.#gapSize * 2))
  }

  #clearBoard() {
    this.#ctx.clearRect(0, 0, this.#domElement.width, this.#domElement.height)
  }
}