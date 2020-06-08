import { async, TestBed } from '@angular/core/testing';
import { ImagepreviewModule } from './imagepreview.module';

describe('ImagepreviewModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ImagepreviewModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ImagepreviewModule).toBeDefined();
  });
});
