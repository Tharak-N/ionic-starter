import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const TabRoutes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-shops',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'browse-shops',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'offer-promos',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/tab1',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/my-shops',
    pathMatch: 'full',
  },
];
