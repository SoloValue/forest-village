import { Resources } from "../village";
import { Creature } from "./creature.class";
import { CreatureStats } from "./creatures";

export class Otter extends Creature {
  public static override stats: CreatureStats = {
    info: {
      front_name: 'Otter',
      item_name: 'otter'
    },
    base_requirements: {
      space: 4,
      daily_food: 4,
      invite_cost: 60,
    },
    base_gather: {
      gold: 10,
    }
  };
  public override name: string;

  override _available_names: string[] = ['Sir. Otter III', 'Oswald', 'Odessa', 'Olive', 'Otis', 'Opal', 'Pascal'];

  public override get gathered_resources(): Resources {
    return Otter.stats.base_gather;
  }
  public override get required_daily_food(): number {
    return Otter.stats.base_requirements.daily_food;
  }
  public override get item_name(): string {
    return Otter.stats.info.item_name;
  }

  constructor() {
    super();

    const new_name = this._pickName();
    this.name = new_name;
  }

  override _pickName(): string {
    const ran_index = Math.floor(Math.random() * this._available_names.length);
    return this._available_names[ran_index];
  }
}