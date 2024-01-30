import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { ResumeLayout2Component } from './resume-layout2.component';

describe('ResumeLayout1Component', () => {
  let component: ResumeLayout2Component;
  let fixture: ComponentFixture<ResumeLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResumeLayout2Component , 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
