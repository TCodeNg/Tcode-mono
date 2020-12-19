import { TestBed, waitForAsync } from '@angular/core/testing';
import { CardModule } from './card.module';

describe('CardModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CardModule).toBeDefined();
  });
});
