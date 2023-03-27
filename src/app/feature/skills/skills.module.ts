import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MatChipsModule
  ],
  exports:[
    SkillsComponent
  ]
})
export class SkillsModule { }
