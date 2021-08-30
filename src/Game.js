/**
 * @typedef {'up'|'down'|'left'|'right'} Direction
 * @typedef {{x: number, y: number}} Position
 * @typedef {(direction: Direction, snake: Position[]) => void} TickCallback
 * @typedef {{beforeTick: ?TickCallback, afterTick: ?TickCallback}} EventsBag
 */

const cloneDeep = require('lodash/cloneDeep.js')

export default class Game {
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

    let newHead = { ...this.#snake[0] }

    // TODO Deal with OOB
    if (this.#direction === 'up') {
      newHead.y--
    } else if (this.#direction === 'down') {
      newHead.y++
    } else if (this.#direction === 'left') {
      newHead.x--
    } else if (this.#direction === 'right') {
      newHead.x++
    }

    this.#snake.unshift(newHead)

    this.#events.afterTick?.(this.#direction, cloneDeep(this.#snake))
  }
}