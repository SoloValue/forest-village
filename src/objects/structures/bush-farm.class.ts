import { GameEventFunction } from "../game";
import { Game } from "../game.class";
import { Structure } from "./structure.class";

export class BushFarm extends Structure {
  public override name = "Bush Farm";
  public override base_cost = 100;
  public override base_maintainance = 1;

  public base_food_production = 10;

  public override onBuildEffect: GameEventFunction;
  public override endDayEffect: GameEventFunction;

  constructor(game_state: Game) {
    super();
    this.onBuildEffect = (game_state) => { };
    this.endDayEffect = (game_state) => {
      let stored_resources = game_state.village.stored_resources;
      stored_resources.food = (stored_resources.food || 0) + this.base_food_production;
    };

    this.build(game_state);
  }


}