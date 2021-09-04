import ConsoleRenderer from './ConsoleRenderer'
import Game from './Game'
import SquareRenderer from './SquareRenderer'

let game = new Game()
// @ts-ignore
new SquareRenderer(game, document.getElementById('snake-square'))
// @ts-ignore
new ConsoleRenderer(game)
// @ts-ignore
window.game = game