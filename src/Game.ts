import mitt, { Emitter } from 'mitt'

const matches = require('lodash/matches.js')
const isMatch = require('lodash/isMatch.js')

export enum Direction {
  Up = '⬆️',
  Down = '⬇️',
  Left = '⬅️',
  Right = '➡️',
}

export type Position = { x: number, y: number }
export type Snake = (Position & { direction: Direction })[]
export type GameState = {
  direction: Direction,
  snake: Snake,
  apple: Position,
  score: number,
  running: boolean,
  lost: boolean,
  ticks: number,
  touched: Position|null,
}
export type GameEvents = {
  '*': GameState,
  afterTick: GameState,
  directionChanged: GameState,
  appleEaten: GameState,
  play: GameState,
  pause: GameState,
  lost: GameState,
}

export default class Game {
  readonly cols: number = 20
  readonly rows: number = 15
  readonly events: Emitter<GameEvents>

  // @ts-ignore: Property 'apple' has no initializer and is not definitely assigned in the constructor.
  protected apple: Position
  protected snake: Snake = [
    Object.freeze({ x: 2, y: 0, direction: Direction.Right }),
    Object.freeze({ x: 1, y: 0, direction: Direction.Right }),
    Object.freeze({ x: 0, y: 0, direction: Direction.Right }),
  ]
  protected direction: Direction = Direction.Right
  protected size: number
  protected intervalId
  protected touched: Position|null = null
  protected lost: boolean = false
  protected ticks: number = 0

  constructor() {
    this.size = this.snake.length
    this.newApple()
    this.events = mitt()
    this.registerControls()
  }

  public get state(): GameState {
    return {
      direction: this.direction,
      snake: [...this.snake],
      apple: this.apple,
      score: this.size - 3,
      running: this.running,
      lost: this.lost,
      ticks: this.ticks,
      touched: this.touched
    }
  }

  public get running(): boolean {
    return !!this.intervalId
  }

  public up() {
    this.changeDirection(Direction.Up)
  }

  public down() {
    this.changeDirection(Direction.Down)
  }

  public left() {
    this.changeDirection(Direction.Left)
  }

  public right() {
    this.changeDirection(Direction.Right)
  }

  public play() {
    if (! this.lost && ! this.running) {
      this.start()
      this.events.emit('play', this.state)
    }
  }

  public pause() {
    if (! this.lost && this.running) {
      this.stop()
      this.events.emit('pause', this.state)
    }
  }

  public start() {
    if (! this.intervalId) {
      this.intervalId = setInterval(() => this.tick(), 150)
    }
  }

  public stop() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  public playpause() {
    if (this.intervalId) {
      this.pause()
    } else {
      this.play()
    }
  }

  public tick() {
    const next = this.nextPosition()

    if (this.snake.some(({ x, y }) => x === next.x && y === next.y) // eat self
        || next.x === -1 // left wall
        || next.x === this.cols // right wall
        || next.y === -1 // top wall
        || next.y === this.rows // down wall
    ) {
      if (!this.touched) { // 1 frame of grace period
        this.touched = next
        this.events.emit('afterTick', this.state)
      } else {
        this.stop()
        this.lost = true
        this.events.emit('lost', this.state)
      }

      return
    }

    this.ticks++
    this.touched = null

    this.snake.unshift(next)
    if (this.snake.length > this.size) {
      this.snake.pop()
    }

    if (isMatch(next, this.apple)) {
      this.size++
      this.newApple()
      this.events.emit('appleEaten', this.state)
    }

    this.events.emit('afterTick', this.state)
  }

  protected changeDirection(direction: Direction) {
    if (this.snake.length === 1
        || direction === Direction.Up && this.snake[0].direction !== Direction.Down
        || direction === Direction.Down && this.snake[0].direction !== Direction.Up
        || direction === Direction.Left && this.snake[0].direction !== Direction.Right
        || direction === Direction.Right && this.snake[0].direction !== Direction.Left
    ) {
      if (this.direction !== direction) {
        this.direction = direction
        this.events.emit('directionChanged', this.state)
      }
      return true
    }
    return false
  }

  protected nextPosition() {
    let next = { ...this.snake[0], direction: this.direction }

    if (next.direction === Direction.Up) {
      next.y--
    } else if (next.direction === Direction.Down) {
      next.y++
    } else if (next.direction === Direction.Left) {
      next.x--
    } else if (next.direction === Direction.Right) {
      next.x++
    }

    Object.freeze(next);

    return next
  }

  protected newApple() {
    do {
      this.apple = Object.freeze({
        x: Math.floor(Math.random() * this.cols),
        y: Math.floor(Math.random() * this.rows)
      })
    } while (this.snake.some(matches(this.apple)))
  }

  protected registerControls() {
    window.addEventListener('keydown', ({ code }) => {
      if (['ArrowUp', 'Numpad8', 'KeyW'].includes(code)) {
        this.lost || this.up()
      } else if (['ArrowDown', 'Numpad2', 'KeyS'].includes(code)) {
        this.lost || this.down()
      } else if (['ArrowLeft', 'Numpad4', 'KeyA'].includes(code)) {
        this.lost || this.left()
      } else if (['ArrowRight', 'Numpad6', 'KeyD'].includes(code)) {
        this.lost || this.right()
      } else if (['NumpadAdd'].includes(code)) {
        this.lost || this.size++
      } else if (['Enter'].includes(code)) {
        this.lost || this.playpause()
      }
    })
  }
}