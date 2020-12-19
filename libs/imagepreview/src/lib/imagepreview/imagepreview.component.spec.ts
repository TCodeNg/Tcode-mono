import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImagepreviewComponent } from './imagepreview.component';

describe('ImagepreviewComponent', () => {
  let component: ImagepreviewComponent;
  let fixture: ComponentFixture<ImagepreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
