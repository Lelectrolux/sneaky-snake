import AsciiRenderer from './AsciiRenderer'
import ConsoleRenderer from './ConsoleRenderer'
import Game from './Game'
import SquareRenderer from './SquareRenderer'

let game = new Game()
new SquareRenderer(game, <HTMLCanvasElement>document.getElementById('squares'))
new ConsoleRenderer(game)
new AsciiRenderer(game, <HTMLPreElement>document.getElementById('ascii'))

// @ts-ignore
window.game = game