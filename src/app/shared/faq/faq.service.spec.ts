import { TestBed } from '@angular/core/testing';
import { FAQService } from './FAQ.service';

 
describe('FaqService', () => {
  let service: FAQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
