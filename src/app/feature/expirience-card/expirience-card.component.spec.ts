import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { ExpirienceCardComponent } from './expirience-card.component';

describe('ExpirienceCardComponent', () => {
  let component: ExpirienceCardComponent;
  let fixture: ComponentFixture<ExpirienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpirienceCardComponent ],
      imports: [
        MatDialogModule,
      ],})

    
    .compileComponents();

    fixture = TestBed.createComponent(ExpirienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
