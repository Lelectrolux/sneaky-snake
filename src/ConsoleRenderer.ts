import Game, { GameState, Position } from "Game";
import BaseRenderer from "./BaseRenderer";

const formatCoords = ({ x, y }: Position) => {
  return `[${String(x).padStart(2, '0')} ${String(y).padStart(2, '0')}]`
}

export default class ConsoleRenderer extends BaseRenderer {
  constructor(game: Game) {
    super()

    this.init(game)
  }

  public render({ snake, apple }: GameState) {
    let appleLog = `🍎\t${formatCoords(apple)}`
    let snakeLog = `🐍\tlength=${snake.length}` + snake.reduce((str, cell, i) => {
      if (i === 0 || cell.direction !== snake[i - 1].direction) {
        return str + `\n${cell.direction}\t${formatCoords(cell)}`
      }
      return str + `\n\t${formatCoords(cell)}`
    }, '')

    console.log(appleLog + '\n' + snakeLog)
  }
}