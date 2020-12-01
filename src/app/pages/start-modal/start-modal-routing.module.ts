import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartModalPage } from './start-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StartModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartModalPageRoutingModule {}
