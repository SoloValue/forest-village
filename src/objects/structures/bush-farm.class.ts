import { GameEventFunction } from "../game";
import { Game } from "../game.class";
import { Structure } from "./structure.class";
import { StructureStats } from "./structures";

export class BushFarm extends Structure {
  public static override stats: StructureStats = {
    info: {
      front_name: 'Bush Farm',
      item_name: 'bush-farm',
    },
    base_cost: {
      build: 100,
      maintenance: 1,
    },
    base_production: {
      food: 10
    }
  };

  public override name = "Bush Farm";

  public override get build_cost(): number {
    return BushFarm.stats.base_cost.build;
  }
  public override get maintenance(): number {
    return BushFarm.stats.base_cost.maintenance;
  }
  public override get item_name(): string {
    return BushFarm.stats.info.item_name;
  }
  public get food_production(): number {
    return BushFarm.stats.base_production.food!;
  }

  public override onBuildEffect: GameEventFunction;
  public override endDayEffect: GameEventFunction;

  constructor(game_state: Game) {
    super();
    this.onBuildEffect = (game_state) => { };
    this.endDayEffect = (game_state) => {
      let stored_resources = game_state.village.stored_resources;
      stored_resources.food = (stored_resources.food || 0) + this.food_production;
    };

    this.build(game_state);
  }


}