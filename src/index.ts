import AsciiRenderer from './AsciiRenderer'
import ConsoleRenderer from './ConsoleRenderer'
import Game from './Game'
import SpriteRenderer from "./SpriteRenderer"

declare global {
  interface Window {
    Game,
    ConsoleRenderer,
    AsciiRenderer,
    SpriteRenderer,
  }
}

window.Game = Game
window.ConsoleRenderer = ConsoleRenderer
window.AsciiRenderer = AsciiRenderer
window.SpriteRenderer = SpriteRenderer