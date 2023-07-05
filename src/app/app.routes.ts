import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.routes').then((m) => m.MenuRoutes),
  },
  {
    path: 'fruits-vegetables',
    loadComponent: () => import('./fruits-vegetables/fruits-vegetables.component').then((c) => c.FruitsVegetablesComponent)
  },
];
