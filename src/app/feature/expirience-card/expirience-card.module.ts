import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpirienceCardRoutingModule } from './expirience-card-routing.module';
import { ExpirienceCardComponent } from './expirience-card.component';
   

@NgModule({
  declarations: [
    ExpirienceCardComponent
  ],
  imports: [
    CommonModule,
    ExpirienceCardRoutingModule,
       
  ],
  exports:[
    ExpirienceCardComponent
  ]
})
export class ExpirienceCardModule { }
