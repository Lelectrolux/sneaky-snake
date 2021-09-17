import AsciiRenderer from './AsciiRenderer'
import ConsoleRenderer from './ConsoleRenderer'
import Game from './Game'
import SpriteRenderer from "./SpriteRenderer"
import SquareRenderer from './SquareRenderer'

declare global {
  interface Window {
    Game,
    ConsoleRenderer,
    AsciiRenderer,
    SquareRenderer,
    SpriteRenderer,
  }
}

window.Game = Game
window.ConsoleRenderer = ConsoleRenderer
window.AsciiRenderer = AsciiRenderer
window.SquareRenderer = SquareRenderer
window.SpriteRenderer = SpriteRenderer