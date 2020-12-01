import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TabCardSlidePageRoutingModule } from './tab-card-slide-routing.module';
import { TabCardSlidePage } from './tab-card-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCardSlidePageRoutingModule
  ],
  declarations: [TabCardSlidePage]
})
export class TabCardSlidePageModule {}
