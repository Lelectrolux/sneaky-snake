import Game from './Game'
import ConsoleRenderer from './ConsoleRenderer'
import SquareRenderer from './SquareRenderer'
import AsciiRenderer from './AsciiRenderer'

let game = new Game()
new SquareRenderer(game, <HTMLCanvasElement>document.getElementById('snake-square'))
new ConsoleRenderer(game)
new AsciiRenderer(game, <HTMLPreElement>document.getElementById('snake-ascii'))

// @ts-ignore
window.game = game