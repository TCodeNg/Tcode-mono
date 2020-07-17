import { FarmproduceComponent } from "./farmproduce.component"
import { ComponentFixture, TestBed, async } from '@angular/core/testing';


describe('FarmproduceComponent', () => {
  let component: FarmproduceComponent;
  let fixture: ComponentFixture<FarmproduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FarmproduceComponent],
      imports: [

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmproduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

})