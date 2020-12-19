import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AUTH_CONFIG_TOKEN } from '@tcode/frontend-auth';
import { ButtonsModule } from '@tcode/buttons';
import { InputModule } from '@tcode/input';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        ButtonsModule,
        InputModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: AUTH_CONFIG_TOKEN,
          useValue: {
            canResetPassword: true,
            canSignIn: true,
            canSignUp: true,
            appType: 'storefront'
          }
        },
        {
          provide: AngularFirestore,
          useValue: {}
        },
        {
          provide: AngularFireAuth,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
