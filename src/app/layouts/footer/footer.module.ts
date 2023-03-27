import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { AboutModule } from 'src/app/feature/about/about.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,AboutModule
  ] ,
  exports:[
    FooterComponent
  ]
  
})
export class FooterModule { }
