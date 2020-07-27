import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../Shared/shared.module';
import { InverterProductComponent } from './inverterProduct.component';

describe('InverterProductComponent', () => {
  let component: InverterProductComponent;
  let fixture: ComponentFixture<InverterProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InverterProductComponent ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InverterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
