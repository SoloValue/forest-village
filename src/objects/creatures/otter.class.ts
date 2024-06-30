import { Creature } from "./creature.class";
import { CreatureStats } from "./creatures";

export class Otter extends Creature {
  public override name: string;
  public override stats: CreatureStats;

  private _available_names: string[] = ['Sir. Otter III', 'Oswald', 'Odessa', 'Olive', 'Otis', 'Opal', 'Pascal'];

  constructor() {
    super();

    const new_name = this._pickName();
    this.name = new_name;

    this.stats = {
      requirements: {
        space: 4,
        daily_food: 4
      },
      gather: {
        gold: 10,
      }
    }
  }

  private _pickName(): string {
    const ran_index = Math.floor(Math.random() * this._available_names.length);
    return this._available_names[ran_index];
  }
}