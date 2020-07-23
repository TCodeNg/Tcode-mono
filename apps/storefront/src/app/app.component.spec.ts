import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './Shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FrontendAuthModule } from '@tcode/frontend-auth';
import { NgxsModule } from '@ngxs/store';
import { NgxsDataPluginModule } from '@ngxs-labs/data';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        MatIconModule,
        MatMenuModule,
        NgxsModule.forRoot([]),
        NgxsDataPluginModule.forRoot(),
        FrontendAuthModule.forRoot({
          canResetPassword: true,
          canSignIn: true,
          canSignUp: true,
          appType: 'storefront'
        }, 'customer')
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
