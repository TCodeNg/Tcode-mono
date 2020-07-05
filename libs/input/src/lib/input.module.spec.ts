import { async, TestBed } from '@angular/core/testing';
import { InputModule } from './input.module';

describe('InputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InputModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InputModule).toBeDefined();
  });
});
