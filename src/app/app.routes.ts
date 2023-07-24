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
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications.component').then((c) => c.NotificationsComponent)
  },
  {
    path: 'user-profile',
    // loadChildren: () => import('./user-profile/user-profile-routes').then((m) => m.UserProfileRoutes )
    loadComponent: () => import('./user-profile/user-profile.component').then((c) => c.UserProfileComponent)
  },
  {
    path: 'dev-preview',
    loadComponent: () => import('./dev-preview/dev-preview.component').then((c) => c.DevPreviewComponent)
  },
  {
    path: 'shop-info/:shopDetails',
    loadComponent: () => import('./shop-info/shop-info.component').then((c) => c.ShopInfoComponent)
  },
  {
    path: 'view-catalogue/:shopDetails',
    loadComponent: () => import('./shop-catalogue/shop-catalogue.component').then((c) => c.ShopCatalogueComponent)
  },
  {
    path: 'search-page',
    loadComponent: () => import('./search-page/search-page.component').then((c) => c.SearchPageComponent)
  },
  {
    path: 'nav-modals',
    loadComponent: () => import('./nav-modals/nav-modals.component').then((c) => c.NavModalsComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];


// export const routes: Routes = [
//   {
//     path: 'vendor',
//     loadChildren: (): any => void,
//     canActivate: [
//       () => false
//     ]
//   },
//   {
//     path: 'customer',
//     loadChildren: (): any => void,
//     canActivate: [
//       () => true
//     ]
//   }
// ]
