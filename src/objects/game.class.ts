import { GameEventFunction } from "./game";
import { Village } from "./village.class";

export class Game {
  static end_of_day_event: GameEventFunction[] = [];

  public village: Village;
  public day: number = 0;

  constructor() {
    this.village = new Village();
  }

  public nextDay() {
    Game.end_of_day_event.forEach((eventFunction) => {
      eventFunction(this);
    });
    this.day += 1;
  }
}