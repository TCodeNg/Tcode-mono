import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InputModule } from '@tcode/input';
import { ButtonsModule } from '@tcode/buttons';
import { LiveTrackComponent } from './liveTrack.component';

describe('LiveTrackComponent', () => {
  let component: LiveTrackComponent;
  let fixture: ComponentFixture<LiveTrackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LiveTrackComponent],
      imports: [
        InputModule,
        ButtonsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})