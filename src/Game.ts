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
export type SnakeSegment = Position & { direction: Direction }
export type Snake = SnakeSegment[]
export type GameState = {
  direction: Direction,
  snake: Snake,
  apple: Position,
  score: number,
  size: number,
  running: boolean,
  lost: boolean,
  ticks: number,
  touch: SnakeSegment | false,
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
type Options = {
  eatSelf: boolean,
  boxed: boolean,
  speed: number,
  extraFrame: boolean,
  growth: number,
}

export default class Game {
  readonly cols: number
  readonly rows: number
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
  protected touch: SnakeSegment | false = false
  protected lost: boolean = false
  protected ticks: number = 0
  protected score: number = 0
  protected options: Options

  constructor(cols: number = 20, rows: number = 15, options: Options | {} = {}) {
    this.cols = cols
    this.rows = rows
    this.options = {
      eatSelf: true,
      boxed: true,
      speed: 150,
      extraFrame: true,
      growth: 1,
      ...options
    }
    this.size = this.snake.length
    this.newApple()
    this.events = mitt()
    this.registerControls()
  }

  public get state(): GameState {
    return Object.freeze({
      direction: this.direction,
      snake: Object.freeze([...this.snake]) as Snake,
      apple: this.apple,
      score: this.score,
      size: this.size,
      running: this.running,
      lost: this.lost,
      ticks: this.ticks,
      touch: this.touch
    })
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
    if (!this.lost && !this.running) {
      this.start()
      this.events.emit('play', this.state)
    }
  }

  public pause() {
    if (!this.lost && this.running) {
      this.stop()
      this.events.emit('pause', this.state)
    }
  }

  public start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.tick(), this.options.speed)
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

    if (!this.validateNextPosition(next)) {
      if (this.options.extraFrame && !this.touch) { // 1 frame of grace period
        this.touch = next
        this.events.emit('afterTick', this.state)
      } else {
        this.touch = next
        this.stop()
        this.lost = true
        this.events.emit('lost', this.state)
      }

      return
    }

    this.ticks++
    this.touch = false

    this.snake.unshift(next)
    if (this.snake.length > this.size) {
      this.snake.pop()
    }

    if (isMatch(next, this.apple)) {
      this.size += this.options.growth
      this.score++
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

  protected nextPosition(): SnakeSegment {
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

    if (!this.options.boxed) {
      next.x = (next.x + this.cols) % this.cols
      next.y = (next.y + this.rows) % this.rows
    }

    Object.freeze(next);

    return next
  }

  protected validateNextPosition({ x, y }: Position): boolean {
    if (this.options.eatSelf
        && this.snake.slice(0, this.snake.length - 1).some(pos => x === pos.x && y === pos.y)) {
      return false
    }

    return !(this.options.boxed &&
        (x === -1 // left wall
            || x === this.cols // right wall
            || y === -1 // top wall
            || y === this.rows // down wall
        ));
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
      } else if (['Enter', 'Space'].includes(code)) {
        this.lost || this.playpause()
      } else if (['KeyR'].includes(code)) {
        this.lost && window.location.reload()
      }
    })
  }
}