import Game, { GameState, Position } from "Game"
type Output = (text: string) => void

const formatCoords = ({ x, y }: Position) => {
  return `[${String(x).padStart(2, '0')} ${String(y).padStart(2, '0')}]`
}

export default class ConsoleRenderer {
  protected output: Output

  constructor(game: Game, output: Output = text => console.log(text)) {
    this.output = output

    this.render(game.state)

    game.events.on('afterTick', state => this.render(state))
    game.events.on('play', () => this.output('▶️ Play'))
    game.events.on('pause', () => this.output('⏸️ Pause'))
    game.events.on('lost', ({ score, ticks }) => {
      this.output(`⏹️\tGame Over\n🏆\t${score} points\n⏱\t${ticks} ticks`)
    })
  }

  public render({ snake, apple, cherry, score, ticks }: GameState) {
    let appleLog = `🍎\t${formatCoords(apple)}`

    if (cherry) {
      appleLog += `\n🍏\t${formatCoords(cherry[0])} ${cherry[1]}`
    }

    let snakeLog = `🐍\tSegments: ${snake.length}` + snake.reduce((str, cell, i) => {
      if (i === 0 || cell.direction !== snake[i - 1].direction) {
        return str + `\n${cell.direction}\t${formatCoords(cell)}`
      }
      return str + `\n\t${formatCoords(cell)}`
    }, '')

    this.output(`⏱\tTicks: ${ticks}\n🏆\tScore: ${score}\n${appleLog}\n${snakeLog}`)
  }
}