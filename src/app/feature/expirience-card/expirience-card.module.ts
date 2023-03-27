import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpirienceCardRoutingModule } from './expirience-card-routing.module';
import { ExpirienceCardComponent } from './expirience-card.component';
import { MatDialogModule } from '@angular/material/dialog';
  

@NgModule({
  declarations: [
    ExpirienceCardComponent
  ],
  imports: [
    CommonModule,
    ExpirienceCardRoutingModule,
     MatDialogModule
      
  ],
  exports:[
    ExpirienceCardComponent
  ]
})
export class ExpirienceCardModule { }
