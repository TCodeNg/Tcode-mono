import { TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonsModule } from './buttons.module';

describe('ButtonsModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ButtonsModule).toBeDefined();
  });
});
