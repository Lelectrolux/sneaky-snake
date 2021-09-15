import Game, { GameState } from "./Game";

export default abstract class BaseRenderer {
  protected init({ state, events }: Game) {
    this.render(state)
    events.on('afterTick', state => this.render(state))
  }

  public abstract render(state: GameState);
}