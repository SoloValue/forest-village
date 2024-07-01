import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Game } from '../../../objects/game.class';
import { Otter } from '../../../objects/creatures/otter.class';
import { Creature } from '../../../objects/creatures/creature.class';
import { BushFarm } from '../../../objects/structures/bush-farm.class';
import { Structure } from '../../../objects/structures/structure.class';
import { ShopComponent } from '../../components/shop/shop.component';

@Component({
  selector: 'app-village',
  standalone: true,
  imports: [CommonModule, ShopComponent],
  templateUrl: './village.component.html',
  styleUrl: './village.component.css'
})
export class VillageComponent {
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

    const test = new Otter();
  }

  public nextDay() {
    this.game_state.nextDay();
  }

  public onBuyBuilding(target: any) {
    const priceToPay = target.stats.base_cost.build;
    if (priceToPay <= (this.game_state.village.stored_resources.gold || 0)) {
      this.game_state.village.structures.push(new target());
      this.game_state.village.stored_resources.gold! -= priceToPay;
    }
  }
}
