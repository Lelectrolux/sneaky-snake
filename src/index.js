import Game from './Game.js'
import SquareRenderer from './SquareRenderer.js'
import ConsoleRenderer from './ConsoleRenderer.js'

window.game = new Game()
new SquareRenderer(game, document.getElementById('snake-square'))
new ConsoleRenderer(game)