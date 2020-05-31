import { async, TestBed } from '@angular/core/testing';
import { ButtonsModule } from './buttons.module';

describe('ButtonsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ButtonsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ButtonsModule).toBeDefined();
  });
});
