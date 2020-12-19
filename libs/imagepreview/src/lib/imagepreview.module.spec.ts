import { TestBed, waitForAsync } from '@angular/core/testing';
import { ImagepreviewModule } from './imagepreview.module';

describe('ImagepreviewModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ImagepreviewModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ImagepreviewModule).toBeDefined();
  });
});
