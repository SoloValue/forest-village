import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BushFarm } from '../../../objects/structures/bush-farm.class';

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
  ];

  @Input() available_gold!: number;
  @Output() buyStructureEvent = new EventEmitter<any>();

  public onBuyClick(target: any) {
    this.buyStructureEvent.emit(target);
  }
}
