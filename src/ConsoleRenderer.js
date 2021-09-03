import { Emitter } from 'mitt'

const directions = { up: '⬆️', down: '⬇️', left: '⬅️', right: '➡️' }

const formatCoords = ({ x, y }) => {
  return `[${String(x).padStart(2, '0')} ${String(y).padStart(2, '0')}]`
}

export default class ConsoleRenderer {
  /** @param {Game} game */
  constructor(game) {
    this.#addListeners(game.events)
  }

  /** @param {Emitter<Events>} events */
  #addListeners(events) {
    events.on('afterTick', this.#logToConsole)
  }

  #logToConsole({ snake, apple }) {
    let appleLog = `🍎\t${formatCoords(apple)}`
    let snakeLog = `🐍\tlength=${snake.length}` + snake.reduce((str, cell, i) => {
      if (i === 0 || cell.direction !== snake[i - 1].direction) {
        return str + `\n${directions[cell.direction]}\t${formatCoords(cell)}`
      }
      return str + `\n\t${formatCoords(cell)}`
    }, '')

    console.log(appleLog + '\n' + snakeLog)
  }
}