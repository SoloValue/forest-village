import { Resources } from "../village";
import { Creature } from "./creature.class";
import { CreatureStats } from "./creatures";

export class Racoon extends Creature {
  public static override stats: CreatureStats = {
    info: {
      front_name: 'Racoon',
      item_name: 'racoon'
    },
    base_requirements: {
      space: 4,
      daily_food: 6,
      invite_cost: 90,
    },
    base_gather: {
      gold: 18,
    }
  };
  override name: string;

  override _available_names: string[] = ['Tom Nook', 'Timmy', 'Tommy', 'Rascal', 'Zorro', 'Rocket', 'Shadow'];

  public override get gathered_resources(): Resources {
    return Racoon.stats.base_gather;
  }
  public override get required_daily_food(): number {
    return Racoon.stats.base_requirements.daily_food;
  }
  public override get item_name(): string {
    return Racoon.stats.info.item_name;
  }

  constructor() {
    super();

    const new_name = this._pickName();
    this.name = new_name;
  }
}