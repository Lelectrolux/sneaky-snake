import Game, { Direction, GameState } from "./Game";
const repeat = require('lodash/repeat.js')
const chunk = require('lodash/chunk.js')

function headArrow(direction: Direction): string {
  return {
    [Direction.Up]: '↑',
    [Direction.Down]: '↓',
    [Direction.Left]: '←',
    [Direction.Right]: '→'
  }[direction]
}

export default class AsciiRenderer {
  cols: number
  rows: number
  pre: HTMLPreElement

  constructor(game: Game, pre: HTMLPreElement) {
    this.cols = game.cols
    this.rows = game.rows
    this.pre = pre

    this.redraw(game.state)

    // TODO might want to look into css scaling transform to force
    //  width / height ratio to match (cols + 2) / (rows + 2)

    game.events.on('afterTick', state => this.redraw(state))
  }

  redraw({ snake, apple }: GameState) {
    let data = new Array(this.rows * this.cols).fill(' ')
    data = chunk(data, this.cols)

    snake.forEach(({ x, y, direction }, i) => {
      data[y][x] = i === 0 ? headArrow(direction) : '#'
    })

    data[apple.y][apple.x] = '@'

    let horizontalBorder = `+${repeat('—', this.cols)}+`

    this.pre.innerText = [
      horizontalBorder,
      ...data.map(line => `|${line.join('')}|`),
      horizontalBorder
    ].join('\n')
  }
}