import AsciiRenderer from './AsciiRenderer'
import ConsoleRenderer from './ConsoleRenderer'
import Game from './Game'
import SpriteRenderer from "./SpriteRenderer";
import SquareRenderer from './SquareRenderer'

let game = new Game()
new ConsoleRenderer(game)
new SquareRenderer(game, <HTMLCanvasElement>document.getElementById('squares'))
new SpriteRenderer(game, <HTMLCanvasElement>document.getElementById('sprites'))
new AsciiRenderer(game, <HTMLPreElement>document.getElementById('ascii'))

// @ts-ignore
window.game = game