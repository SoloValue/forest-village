import { GameEventFunction } from "../game";
import { Game } from "../game.class";
import { StructureStats } from "./structures";

export abstract class Structure {
  public static stats: StructureStats;

  public abstract name: string;

  public abstract get build_cost(): number;
  public abstract get maintenance(): number;
  public abstract get item_name(): string;

  public abstract onBuildEffect: GameEventFunction;
  public abstract endDayEffect: GameEventFunction;

  constructor() { }

  public build(game_state: Game) {
    Game.end_of_day_event.push(this.endDayEffect);
    this.onBuildEffect(game_state);
  }
} 