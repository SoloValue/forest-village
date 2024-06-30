import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Game } from '../objects/game.class';
import { Otter } from '../objects/creatures/otter.class';
import { Creature } from '../objects/creatures/creature.class';
import { CommonModule } from '@angular/common';
import { GatherableResources } from '../objects/creatures/creatures';
import { BushFarm } from '../objects/structures/bush-farm.class';
import { Structure } from '../objects/structures/structure.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forest-village';

  public game_state!: Game;

  public get resources_as_pair(): [string, number][] {
    return Object.entries(this.game_state.village.stored_resources);
  }
  public get population(): Creature[] {
    return this.game_state.village.population;
  }
  public get structures(): Structure[] {
    return this.game_state.village.structures;
  }
  public get current_day(): number {
    return this.game_state.day;
  }

  ngOnInit() {
    this.game_state = new Game();
    this.game_state.village.population.push(
      new Otter(),
      new Otter(),
    );
    this.game_state.village.structures.push(
      new BushFarm(this.game_state),
    );
    console.log(this.resources_as_pair)
  }

  public nextDay() {
    this.game_state.nextDay();
  }
}
