import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeLayout1RoutingModule } from './resume-layout1-routing.module';
import { DialogModule } from 'src/app/feature/dialog/dialog.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResumeLayout1RoutingModule,
    DialogModule,
    FooterModule
  ],
  exports: [

  ]
})
export class ResumeLayout1Module { }
