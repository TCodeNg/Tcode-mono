import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberComponent } from './phone-number.component';
import { InputModule } from '@tcode/input';

describe('PhoneNumberComponent', () => {
  let component: PhoneNumberComponent;
  let fixture: ComponentFixture<PhoneNumberComponent>;

  beforeEach(async(() => {
    
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ PhoneNumberComponent ],
        imports: [
          InputModule
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(PhoneNumberComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
})