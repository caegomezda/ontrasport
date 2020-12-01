import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCardSlidePage } from './tab-card-slide.page';

const routes: Routes = [
  {
    path: '',
    component: TabCardSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCardSlidePageRoutingModule {}
