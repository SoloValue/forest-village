export interface CreatureStats {
  requirements: {
    space: number,
    daily_food: number
  },
  gather: GatherableResources
}

export interface GatherableResources {
  food?: number,
  gold?: number,
  pearl?: number,
}