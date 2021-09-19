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
      this.output('⏹️\tStop')
      this.output(`🏆\tFinished\n🍎\t${score} eaten\n⏱\t${ticks} ticks`)
    })
  }

  public render({ snake, apple, score, ticks }: GameState) {
    let appleLog = `🍎\teaten=${score}\n\t${formatCoords(apple)}`
    let snakeLog = `🐍\tlength=${snake.length}` + snake.reduce((str, cell, i) => {
      if (i === 0 || cell.direction !== snake[i - 1].direction) {
        return str + `\n${cell.direction}\t${formatCoords(cell)}`
      }
      return str + `\n\t${formatCoords(cell)}`
    }, '')

    this.output(`⏱\tticks=${ticks}\n${appleLog}\n${snakeLog}`)
  }
}