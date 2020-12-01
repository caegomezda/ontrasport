import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartModalPageRoutingModule } from './start-modal-routing.module';

import { StartModalPage } from './start-modal.page';
import { StartPage } from '../start/start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartModalPageRoutingModule,
  ],
  exports:[
    /* StartModalPage */
  ],
  declarations: [StartModalPage]
})
export class StartModalPageModule {}
