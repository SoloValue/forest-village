import { Routes } from '@angular/router';
import { VillageComponent } from './components/village/village.component';

export const routes: Routes = [
  { path: '', redirectTo: 'village', pathMatch: 'full' },
  { path: 'village', component: VillageComponent },
];
