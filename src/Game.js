/**
 * @typedef {'up'|'down'|'left'|'right'} Direction
 * @typedef {{x: number, y: number}} Position
 * @typedef {Position[]} Snake
 * @typedef {{
 *   direction: Direction,
 *   snake: Snake,
 *   apple: Position
 * }} GameState
 * @typedef {{
 *   afterTick: GameState,
 *   beforeTick: GameState,
 *   directionChanged: GameState,
 *   appleEaten: GameState
 * }} Events
 */
import mitt, { Emitter } from 'mitt'

const matches = require('lodash/matches.js')
const isMatch = require('lodash/isMatch.js')

export default class Game {
  static #COLS = 20
  static #ROWS = 15

  /** @type Direction */
  #direction = 'right'

  /** @type Snake */
  #snake = [Object.freeze({ x: 0, y: 0 })]

  #size

  /** @type Position */
  #apple

  /** @type Emitter<Events> */
  #events

  constructor() {
    this.#size = this.#snake.length
    this.#newApple()
    this.#events = mitt()
  }

  get events() {
    return this.#events
  }

  get snake() {
    return [...this.#snake]
  }

  get apple() {
    return this.#apple
  }

  get state() {
    return {
      direction: this.#direction,
      snake: this.snake,
      apple: this.apple,
      size: this.#size
    }
  }

  /** @param {Direction} direction */
  changeDirection(direction) {
    if (this.#direction !== direction
        && (this.#snake.length === 1
            || direction === 'up' && this.#snake[0].y - this.#snake[1].y !== 1
            || direction === 'down' && this.#snake[0].y - this.#snake[1].y !== -1
            || direction === 'left' && this.#snake[0].x - this.#snake[1].x !== 1
            || direction === 'right' && this.#snake[0].x - this.#snake[1].x !== -1)
    ) {
      this.#direction = direction
      this.#events.emit('directionChanged', this.state)
    }
  }

  tick() {
    this.#events.emit('beforeTick', this.state)

    const next = this.#nextPosition()

    if (this.#snake.some(matches(next))
        || next.x === -1
        || next.x === Game.#COLS
        || next.y === -1
        || next.y === Game.#ROWS
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
    let next = { ...this.#snake[0] }

    if (this.#direction === 'up') {
      next.y--
    } else if (this.#direction === 'down') {
      next.y++
    } else if (this.#direction === 'left') {
      next.x--
    } else if (this.#direction === 'right') {
      next.x++
    }

    Object.freeze(next);

    return next
  }

  #newApple() {
    do {
      this.#apple = Object.freeze({
        x: Math.floor(Math.random() * Game.#COLS),
        y: Math.floor(Math.random() * Game.#ROWS)
      })
    } while (this.#snake.some(matches(this.#apple)))
  }
}