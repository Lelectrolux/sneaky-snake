/**
 * @typedef {'up'|'down'|'left'|'right'} Direction
 * @typedef {{x: number, y: number}} Position
 * @typedef {(direction: Direction, snake: Position[]) => void} TickCallback
 * @typedef {{beforeTick: ?TickCallback, afterTick: ?TickCallback}} EventsBag
 */

const cloneDeep = require('lodash/cloneDeep.js')
const matches = require('lodash/matches.js')

export default class Game {
  static #COLS = 20
  static #ROWS = 15

  /** @type Direction */
  #direction = 'right'

  /** @type Position[] */
  #snake = [{ x: 1, y: 0 }, { x: 0, y: 0 }]

  /** @type EventsBag */
  #events

  /**
   * @param {TickCallback} beforeTick
   * @param {TickCallback} afterTick
   */
  constructor({beforeTick = null, afterTick = null} = {}) {
    this.#events = {beforeTick, afterTick}
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
    }
  }

  tick() {
    this.#events.beforeTick?.(this.#direction, cloneDeep(this.#snake))

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

    this.#events.afterTick?.(this.#direction, cloneDeep(this.#snake))
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

    return next
  }
}