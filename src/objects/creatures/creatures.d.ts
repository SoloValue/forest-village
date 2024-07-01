import { Resources } from "../village"

export interface CreatureStats {
  info: {
    item_name: string
  },
  base_requirements: {
    space: number,
    daily_food: number
  },
  base_gather: Resources
}