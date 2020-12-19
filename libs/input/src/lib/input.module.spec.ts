import { TestBed, waitForAsync } from '@angular/core/testing';
import { InputModule } from './input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('InputModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        InputModule, 
        MatIconModule, 
        MatMenuModule,
        MatTooltipModule
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InputModule).toBeDefined();
  });
});
