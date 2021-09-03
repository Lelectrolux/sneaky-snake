/**
 * @typedef {'up'|'down'|'left'|'right'} Direction
 * @typedef {{x: number, y: number}} Position
 * @typedef {Position & {direction: Direction}} SnakeSegment
 * @typedef {SnakeSegment[]} Snake
 * @typedef {{
 *   direction: Direction,
 *   snake: Snake,
 *   apple: Position
 * }} GameState
 * @typedef {{
 *   afterTick: GameState,
 *   directionChanged: GameState,
 *   appleEaten: GameState
 * }} Events
 */
import mitt, { Emitter } from 'mitt'

const matches = require('lodash/matches.js')
const isMatch = require('lodash/isMatch.js')

export default class Game {
  #cols = 20
  #rows = 15

  /** @type Direction */
  #direction = 'right'

  /** @type Snake */
  #snake = [
    Object.freeze({ x: 2, y: 0, direction: 'right' }),
    Object.freeze({ x: 1, y: 0, direction: 'right' }),
    Object.freeze({ x: 0, y: 0, direction: 'right' }),
  ]

  #size

  /** @type Position */
  #apple

  /** @type Emitter<Events> */
  #events

  constructor() {
    this.#size = this.#snake.length
    this.#newApple()
    this.#events = mitt()
    this.#registerControls()
  }

  get cols() {
    return this.#cols
  }

  get rows() {
    return this.#rows
  }

  get events() {
    return this.#events
  }

  get state() {
    return {
      direction: this.#direction,
      snake: [...this.#snake],
      apple: this.#apple,
      size: this.#size
    }
  }

  /** @param {Direction} direction */
  changeDirection(direction) {
    if (this.#snake.length === 1
        || direction === 'up' && this.#snake[0].direction !== 'down'
        || direction === 'down' && this.#snake[0].direction !== 'up'
        || direction === 'left' && this.#snake[0].direction !== 'right'
        || direction === 'right' && this.#snake[0].direction !== 'left'
    ) {
      if (this.#direction !== direction) {
        this.#direction = direction
        this.#events.emit('directionChanged', this.state)
      }
      return true
    }
    return false
  }

  tick() {
    const next = this.#nextPosition()

    if (this.#snake.some(({ x, y }) => x === next.x && y === next.y) // eat self
        || next.x === -1 // left wall
        || next.x === this.#cols // right wall
        || next.y === -1 // top wall
        || next.y === this.#rows // down wall
    ) {
      return
    }

    this.#snake.unshift(next)
    if (this.#snake.length > this.#size) {
      this.#snake.pop()
    }

    if (isMatch(next, this.#apple)) {
      this.#size++
      this.#newApple()
      this.#events.emit('appleEaten', this.state)
    }

    this.#events.emit('afterTick', this.state)
  }

  #nextPosition() {
    let next = { ...this.#snake[0], direction: this.#direction }

    if (next.direction === 'up') {
      next.y--
    } else if (next.direction === 'down') {
      next.y++
    } else if (next.direction === 'left') {
      next.x--
    } else if (next.direction === 'right') {
      next.x++
    }

    Object.freeze(next);

    return next
  }

  #newApple() {
    do {
      this.#apple = Object.freeze({
        x: Math.floor(Math.random() * this.#cols),
        y: Math.floor(Math.random() * this.#rows)
      })
    } while (this.#snake.some(matches(this.#apple)))
  }

  up() {
    this.changeDirection('up') && this.tick()
  }

  down() {
    this.changeDirection('down') && this.tick()
  }

  left() {
    this.changeDirection('left') && this.tick()
  }

  right() {
    this.changeDirection('right') && this.tick()
  }

  #registerControls() {
    window.addEventListener('keydown', ({ code }) => {
      if (['ArrowUp', 'Numpad8', 'KeyW'].includes(code)) {
        this.up()
      } else if (['ArrowDown', 'Numpad2', 'KeyS'].includes(code)) {
        this.down()
      } else if (['ArrowLeft', 'Numpad4', 'KeyA'].includes(code)) {
        this.left()
      } else if (['ArrowRight', 'Numpad6', 'KeyD'].includes(code)) {
        this.right()
      } else if (['NumpadAdd'].includes(code)) {
        this.#size++
      }
    })
  }
}