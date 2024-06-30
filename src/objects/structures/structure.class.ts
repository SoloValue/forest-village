import { GameEventFunction } from "../game";
import { Game } from "../game.class";

export abstract class Structure {
  public static base_name: string = 'Structure';
  public static base_cost: number = 1;
  public static base_maintenance: number = 1;

  public abstract get name(): string;
  public abstract get cost(): number;
  public abstract get maintenance(): number;

  public abstract onBuildEffect: GameEventFunction;
  public abstract endDayEffect: GameEventFunction;

  constructor() { }

  public build(game_state: Game) {
    Game.end_of_day_event.push(this.endDayEffect);
    this.onBuildEffect(game_state);
  }
} 