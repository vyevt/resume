import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeLayout2RoutingModule } from './resume-layout2-routing.module';
import { DialogModule } from 'src/app/feature/dialog/dialog.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResumeLayout2RoutingModule,
    DialogModule,
    FooterModule
  ],
  exports: [

  ]
})
export class ResumeLayout2Module { }
