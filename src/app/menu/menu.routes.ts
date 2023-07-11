import { Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
// import { MenuComponent } from './menu.component';

export const MenuRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
    loadChildren: () => import('../tabs/tabs.routes').then((m) => m.TabRoutes)
  }
];
