import { async, TestBed } from '@angular/core/testing';
import { ContactModule } from './contact.module';

describe('ContactModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactModule).toBeDefined();
  });
});
