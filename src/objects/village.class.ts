import { Creature } from "./creatures/creature.class";
import { Resources } from "./village";
import { GameEventFunction } from "./game";
import { Game } from "./game.class";
import { Structure } from "./structures/structure.class";

export class Village {
  public name: string = "The village in the forest";
  public total_space: number = 8;
  public get used_space(): number {
    let occ_space = 0;
    for (let creature of this.population) {
      occ_space += creature.stats.base_requirements.space;
    }
    return occ_space;
  }

  public population: Creature[] = [];
  public structures: Structure[] = [];
  public stored_resources: Resources = {};

  constructor() {
    this.stored_resources.food = 100;
    this.stored_resources.gold = 10;
    Game.end_of_day_event.push(
      this.gatherResources,
      this.feedCreatures,
      this.payMaintenance,
    );
  }

  private gatherResources = (game_state: Game) => {
    let gatherd_resources: Resources = {};
    for (let creature of this.population) {
      gatherd_resources = sumResources(gatherd_resources, creature.gatherResources());
    }
    this.stored_resources = sumResources(this.stored_resources, gatherd_resources);
  }

  private feedCreatures = (game_state: Game) => {
    let con_food = 0;
    for (let creature of this.population) {
      con_food += creature.required_daily_food;
    }
    this.stored_resources.food! -= con_food;
  }

  private payMaintenance: GameEventFunction = (game_state) => {
    let tot_cost = 0;
    for (let structure of this.structures) {
      tot_cost += structure.maintenance;
    }
    this.stored_resources.gold = (this.stored_resources.gold || 0) - tot_cost;
  }
}

export function sumResources<T extends object>(inst1: T, inst2: T): T {
  // TODO properly type this function
  const key_set: Set<string> = new Set(Object.keys(inst1).concat(Object.keys(inst2)));
  const summed_result: { [key: string]: number } = {};
  for (let key of key_set) {
    let val1 = (inst1 as any)[key] || 0;
    let val2 = (inst2 as any)[key] || 0;

    summed_result[key] = val1 + val2;
  }
  return summed_result as T;
} 