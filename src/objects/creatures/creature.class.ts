import { Resources } from "../village";
import { CreatureStats } from "./creatures";

export abstract class Creature {
  public static stats: CreatureStats;

  public abstract name: string;
  public abstract get gathered_resources(): Resources;
  public abstract get required_daily_food(): number;
  public abstract get item_name(): string;

  protected abstract _available_names: string[];

  public get stats(): CreatureStats {
    return (this.constructor as any).stats;
  }

  constructor() { }

  public gatherResources(): Resources {
    return this.gathered_resources;
  }

  protected _pickName(): string {
    const ran_index = Math.floor(Math.random() * this._available_names.length);
    return this._available_names[ran_index];
  }
}