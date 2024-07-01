import { Resources } from "../village"

export interface StructureStats {
  info: {
    front_name: string,
    item_name: string
  },
  base_cost: {
    build: number,
    maintenance: number,
  },
  base_production: Resources
}