import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../Shared/shared.module';
import { FarmProductComponent } from './farmProduct.component';

describe('FarmProductComponent', () => {
  let component: FarmProductComponent;
  let fixture: ComponentFixture<FarmProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmProductComponent ],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
