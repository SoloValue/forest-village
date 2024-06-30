import { GameEventFunction } from "../game";
import { Game } from "../game.class";
import { Structure } from "./structure.class";

export class BushFarm extends Structure {
  public static override base_name = 'Bush Farm';
  public static override base_cost = 100;
  public static override base_maintenance = 1;

  public override get name() {
    return BushFarm.base_name;
  }
  public override get cost(): number {
    return BushFarm.base_cost;
  }
  public override get maintenance(): number {
    return BushFarm.base_maintenance;
  }

  public static base_food_production = 10;
  public get food_production(): number {
    return BushFarm.base_food_production;
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