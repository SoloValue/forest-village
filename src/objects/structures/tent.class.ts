import { GameEventFunction } from "../game";
import { Game } from "../game.class";
import { Structure } from "./structure.class";
import { StructureStats } from "./structures";

export class Tent extends Structure {
  public static override stats: StructureStats = {
    info: {
      front_name: 'Tent',
      item_name: 'tent',
    },
    base_cost: {
      build: 100,
      maintenance: 2,
    },
    base_production: {},
    population_space: 8
  };

  public override get name(): string {
    return Tent.stats.info.front_name;
  }

  public override get build_cost(): number {
    return Tent.stats.base_cost.build;
  }
  public override get maintenance(): number {
    return Tent.stats.base_cost.maintenance;
  }
  public override get item_name(): string {
    return Tent.stats.info.item_name;
  }
  public get food_production(): number {
    return Tent.stats.base_production.food!;
  }

  public override onBuildEffect: GameEventFunction;
  public override endDayEffect: GameEventFunction;

  constructor(game_state: Game) {
    super();
    this.onBuildEffect = (game_state) => { };
    this.endDayEffect = (game_state) => { };

    this.build(game_state);
  }
}