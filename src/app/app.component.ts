// app.component.ts
import { Component, Type } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeLayout1Component } from './layouts/resume-layout1/resume-layout1.component';
import { ResumeLayout2Component } from './layouts/resume-layout2/resume-layout2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  layoutComponent: Type<any> = ResumeLayout1Component

  constructor(public router: Router) { }

  changeLayout(): void {
    const newLayout = this.layoutComponent === ResumeLayout1Component
      ? ResumeLayout2Component
      : ResumeLayout1Component;

    this.layoutComponent = newLayout;
  }
}
