import Game from './Game.js'
window.game = new Game()

import SquareRenderer from './SquareRenderer.js'
new SquareRenderer(game, document.getElementById('snake-square'))