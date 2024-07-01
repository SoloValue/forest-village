import { Resources } from "../village"

export interface CreatureStats {
  info: {
    front_name: string,
    item_name: string,
  },
  base_requirements: {
    space: number,
    daily_food: number,
    invite_cost: number,
  },
  base_gather: Resources
}