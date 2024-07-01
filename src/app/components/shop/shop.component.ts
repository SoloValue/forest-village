import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BushFarm } from '../../../objects/structures/bush-farm.class';
import { Tent } from '../../../objects/structures/tent.class';
import { Racoon } from '../../../objects/creatures/racoon.class';
import { Otter } from '../../../objects/creatures/otter.class';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public available_structures: any[] = [
    BushFarm,
    Tent,
  ];

  public available_creatures: any[] = [
    Otter,
    Racoon,
  ];

  @Input() available_gold!: number;
  @Output() buyStructureEvent = new EventEmitter<any>();
  @Output() inviteCreatureEvent = new EventEmitter<any>();

  public onBuyClick(target: any) {
    this.buyStructureEvent.emit(target);
  }

  public onInviteClick(target: any) {
    this.inviteCreatureEvent.emit(target);
  }
}
