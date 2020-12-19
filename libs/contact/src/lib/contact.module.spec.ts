import { TestBed, waitForAsync } from '@angular/core/testing';
import { ContactModule } from './contact.module';

describe('ContactModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContactModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactModule).toBeDefined();
  });
});
