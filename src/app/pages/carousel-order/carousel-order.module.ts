import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarouselOrderPageRoutingModule } from './carousel-order-routing.module';

import { CarouselOrderPage } from './carousel-order.page';
import { ComponetsModule } from '../../componets/componets.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    ComponetsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CarouselOrderPageRoutingModule
  ],
  declarations: [CarouselOrderPage]
})
export class CarouselOrderPageModule {}
