/**
 * @typedef {'up'|'down'|'left'|'right'} Direction
 * @typedef {{x: number, y: number}} Position
 * @typedef {Position[]} Snake
 * @typedef {{direction: Direction, snake: Snake}} GameState
 * @typedef {{
 *   afterTick: GameState,
 *   beforeTick: GameState,
 *   directionChanged: GameState
 * }} Events
 */
import mitt, {Emitter} from 'mitt'
const matches = require('lodash/matches.js')

export default class Game {
  static #COLS = 20
  static #ROWS = 15

  /** @type Direction */
  #direction = 'right'

  /** @type Snake */
  #snake = [Object.freeze({ x: 0, y: 0 })]

  /** @type Emitter<Events> */
  #events

  constructor() {
    this.#events = mitt()
  }

  get events() {
    return this.#events
  }
  get snake() {
    return [...this.#snake]
  }

  /** @param {Direction} direction */
  changeDirection(direction) {
    if (this.#snake.length === 1
        || direction === 'up' && this.#snake[0].y - this.#snake[1].y !== 1
        || direction === 'down' && this.#snake[0].y - this.#snake[1].y !== -1
        || direction === 'left' && this.#snake[0].x - this.#snake[1].x !== 1
        || direction === 'right' && this.#snake[0].x - this.#snake[1].x !== -1
    ) {
      this.#direction = direction
      this.#events.emit('directionChanged', {direction: this.#direction, snake: this.snake})
    }
  }

  tick() {
    this.#events.emit('beforeTick', {direction: this.#direction, snake: this.snake})

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

    this.#events.emit('afterTick', {direction: this.#direction, snake: this.snake})
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
}