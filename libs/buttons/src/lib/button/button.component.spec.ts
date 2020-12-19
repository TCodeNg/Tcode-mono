import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      imports: [
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Normal Button', () => {

    beforeEach(() => {
      component.type = 'normal';
      fixture.detectChanges();
    });

    it('should have a button', () => {
      expect(
        fixture.debugElement.query(By.css('.content'))
          .query(By.css('button[mat-raised-button]'))
      ).toBeTruthy();
    });

    it('should be disabled if disabled is truthy', () => {
      component.disabled = true;
      fixture.detectChanges();
      const btn = fixture.debugElement.query(By.css('button[mat-raised-button]'));
      expect(btn.properties.disabled).toBeTruthy();
    });

    it('should not be disabled if disabled is falsy', () => {
      component.disabled = false;
      fixture.detectChanges();
      const btn = fixture.debugElement.query(By.css('button[mat-raised-button]'));
      expect(btn.properties.disabled).toBeFalsy();
    });

  });

  describe('Icon button', () => {
    beforeEach(() => {
      component.type = 'icon';
      fixture.detectChanges();
    });

    it('should have a button', () => {
      expect(
        fixture.debugElement.query(By.css('.content'))
          .query(By.css('button[mat-icon-button]'))
      ).toBeTruthy();
    });

    it('should be disabled if disabled is truthy', () => {
      component.disabled = true;
      fixture.detectChanges();
      const btn = fixture.debugElement.query(By.css('button[mat-icon-button]'));
      expect(btn.properties.disabled).toBeTruthy();
    });

    it('should not be disabled if disabled is falsy', () => {
      component.disabled = false;
      fixture.detectChanges();
      const btn = fixture.debugElement.query(By.css('button[mat-icon-button]'));
      expect(btn.properties.disabled).toBeFalsy();
    });
  })

  
});
