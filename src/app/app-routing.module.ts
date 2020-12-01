import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'start-modal',
    loadChildren: () => import('./pages/start-modal/start-modal.module').then( m => m.StartModalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tab-card-slide',
    loadChildren: () => import('./pages/tab-card-slide/tab-card-slide.module').then( m => m.TabCardSlidePageModule)
  },
  {
    path: 'carousel-order',
    loadChildren: () => import('./pages/carousel-order/carousel-order.module').then( m => m.CarouselOrderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
