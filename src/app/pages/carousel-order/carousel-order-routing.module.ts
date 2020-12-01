import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarouselOrderPage } from './carousel-order.page';

const routes: Routes = [
  {
    path: '',
    component: CarouselOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarouselOrderPageRoutingModule {}
