import Game, { Direction, GameState } from "./Game";

const repeat = require('lodash/repeat.js')
const chunk = require('lodash/chunk.js')

type Classes = {
  apple: string,
  head: string,
  snake: string,
  board: string,
}

function span(text: string | number, classes: string) {
  return `<span class="${classes}">${text}</span>`
}
function directionToArrow(direction: Direction): string {
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
  classes: Classes

  constructor(
      game: Game,
      pre: HTMLPreElement,
      classes: Classes = {
        apple: 'text-red-600',
        head: 'text-green-700',
        snake: 'text-green-500',
        board: 'text-gray-400'
      }
  ) {
    this.cols = game.cols
    this.rows = game.rows
    this.pre = pre
    this.classes = classes

    this.render(game.state)
    game.events.on('afterTick', state => this.render(state))
    game.events.on('directionChanged', state => this.render(state))
    game.events.on('lost', state => this.render(state))
    game.events.on('pause', state => this.render(state))
    game.events.on('play', state => this.render(state))
  }

  public render({ snake, apple, score, ticks, direction, lost, running }: GameState) {
    let data = new Array(this.rows * this.cols).fill('·')
    data = chunk(data, this.cols)

    snake.forEach(({ x, y, direction: dir }, i) => {
      if (i === 0) { // head
        data[y][x] = span(
            directionToArrow(direction),
            lost || running ? this.classes.head : '')
      } else { // body
        data[y][x] = span(
            directionToArrow(dir !== snake[i - 1].direction ? snake[i - 1].direction : dir),
            lost || running ? this.classes.snake : '')
      }
    })

    data[apple.y][apple.x] = span('@', lost || running ? this.classes.apple : '')

    let divider = `+${repeat('―', this.cols)}+`

    let status = lost ? 'Game Over' : running ? 'Playing' : 'Paused'

    this.pre.innerHTML = [
      `[${span(directionToArrow(direction), this.classes.head)}][${span(score, this.classes.apple)}][${span(ticks, this.classes.board)}]`,

      `<span class="${lost ? this.classes.apple : running ? '' : this.classes.board}">${divider}`,

      ...data.map(line => `|${span(line.join(''), this.classes.board)}|`),

      `${divider}</span>`,

      `[${status}]`,
    ].join('\n')
  }
}