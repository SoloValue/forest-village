import { GatherableResources, CreatureStats } from "./creatures";

export abstract class Creature {
  public abstract name: string;
  public abstract stats: CreatureStats;

  public get gathered_resources(): GatherableResources {
    return this.stats.gather;
  }
  public get required_daily_food(): number {
    return this.stats.requirements.daily_food;
  }

  constructor() { }

  public gatherResources(): GatherableResources {
    return this.gathered_resources;
  }
}