import { async, TestBed } from '@angular/core/testing';
import { InputModule } from './input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('InputModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InputModule, MatIconModule, MatMenuModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InputModule).toBeDefined();
  });
});
