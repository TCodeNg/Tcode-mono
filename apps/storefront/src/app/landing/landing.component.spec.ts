import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { SharedModule } from '../Shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { FrontendAuthModule } from '@tcode/frontend-auth';
import { NgxsModule } from '@ngxs/store';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      imports: [
        SharedModule,
        MatIconModule,
        NgxsModule.forRoot([]),
        NgxsDataPluginModule.forRoot(),
        MatMenuModule,
        MatTooltipModule,
        RouterTestingModule,
        FrontendAuthModule.forRoot({
          canResetPassword: true,
          canSignIn: true,
          canSignUp: true,
          appType: 'storefront'
        }, 'customer')
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
