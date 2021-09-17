import Game, { GameState } from "./Game";

export default abstract class BaseRenderer {
  public abstract render(state: GameState);

  protected init({ state, events }: Game) {
    this.render(state)
    events.on('afterTick', state => this.render(state))
  }
}