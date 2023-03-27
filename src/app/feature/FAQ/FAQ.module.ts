import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { FAQRoutingModule } from './FAQ-routing.module';
import { FAQComponent } from './FAQ.component';


@NgModule({
  declarations: [
    FAQComponent
  ],
  imports: [
    CommonModule,
    FAQRoutingModule
  ]
})
export class FaqModule { }
