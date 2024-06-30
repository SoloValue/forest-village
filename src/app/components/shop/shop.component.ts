import { Component } from '@angular/core';
import { BushFarm } from '../../../objects/structures/bush-farm.class';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public available_structures: any[] = [BushFarm];
}
