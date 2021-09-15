import BaseRenderer from "./BaseRenderer";
import Game, { Direction, GameState } from "./Game";

const repeat = require('lodash/repeat.js')
const chunk = require('lodash/chunk.js')

function directionToArrow(direction: Direction): string {
  return {
    [Direction.Up]: '↑',
    [Direction.Down]: '↓',
    [Direction.Left]: '←',
    [Direction.Right]: '→'
  }[direction]
}

export default class AsciiRenderer extends BaseRenderer {
  cols: number
  rows: number
  pre: HTMLPreElement

  constructor(game: Game, pre: HTMLPreElement) {
    super()

    this.cols = game.cols
    this.rows = game.rows
    this.pre = pre

    this.init(game)
  }

  public render({ snake, apple }: GameState) {
    let data = new Array(this.rows * this.cols).fill(' ')
    data = chunk(data, this.cols)

    snake.forEach(({ x, y, direction }, i) => {
      data[y][x] = i === 0 || direction === snake[i - 1].direction
          ? directionToArrow(direction)
          : directionToArrow(snake[i - 1].direction)
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