import { ComponentFixture, TestBed } from '@angular/core/testing';
import {    MatDialogModule } from '@angular/material/dialog';

import { ResumeLayout1Component } from './resume-layout1.component';

describe('ResumeLayout1Component', () => {
  let component: ResumeLayout1Component;
  let fixture: ComponentFixture<ResumeLayout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResumeLayout1Component ,MatDialogModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
