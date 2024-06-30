import { GameEventFunction } from "../game";
import { Game } from "../game.class";

export abstract class Structure {
  public abstract name: string;
  public abstract base_cost: number;
  public abstract base_maintainance: number;

  public abstract onBuildEffect: GameEventFunction;
  public abstract endDayEffect: GameEventFunction;

  constructor() { }

  public build(game_state: Game) {
    Game.end_of_day_event.push(this.endDayEffect);
    this.onBuildEffect(game_state);
  }
} 