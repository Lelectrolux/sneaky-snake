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
        ? Math.floor((height / this.#rows) / 9) * 9
        : Math.floor((width / this.#cols) / 9) * 9

    this.#gapSize = Math.floor(this.#cellSize / 9)

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
    this.#drawCell(snake[0], 'white')
    snake.slice(1).forEach((position, i) => this.#drawCell(position, i % 2 ? 'gray' : 'lightgray'))
  }

  #drawApple(position) {
    this.#ctx.fillStyle = 'red'

    this.#drawCell(position, 'red')
  }

  #drawCell(position, color) {
    this.#ctx.fillStyle = color
    this.#ctx.fillRect(
        position.x * this.#cellSize + this.#gapSize,
        position.y * this.#cellSize + this.#gapSize,
        this.#cellSize - this.#gapSize,
        this.#cellSize - this.#gapSize
    )
  }

  #clearBoard() {
    this.#ctx.clearRect(0, 0, this.#domElement.width, this.#domElement.height)
  }
}