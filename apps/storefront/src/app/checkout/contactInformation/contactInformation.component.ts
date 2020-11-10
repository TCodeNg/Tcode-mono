import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, take, takeWhile, tap } from 'rxjs/operators';
import { AUTH_SERVICE_TOKEN, AuthService } from '@tcode/frontend-auth';
import { CheckoutFormState } from '../++state/checkout-form.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService, CONTACT_SERVICE_TOKEN } from '@tcode/contact';

@Component({
  selector: 'tcode-checkout-contact-information',
  templateUrl: './contactInformation.component.html',
  styleUrls: ['./contactInformation.component.scss']
})
export class CheckoutContactInformationComponent implements OnInit, OnDestroy {
  isAlive: boolean;
  authFormGroup: FormGroup;
  btnState = 'idle';
  @Select(CheckoutFormState.getState) checkoutFormValue$: Observable<any>
  constructor(
    private router: Router,
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService,
    @Inject(CONTACT_SERVICE_TOKEN) private contactService: ContactService,
    private fb: FormBuilder,
    private checkoutformState: CheckoutFormState,
    private _snackBar: MatSnackBar
  ) {
    this.isAlive = true;
    this.authFormGroup = fb.group({
      phone: ['', Validators.required],
      email: ['', Validators.email],
      // password: [''],
      // confirmPassword: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      shippingPhone: ['', Validators.required],
      shippingState: ['', Validators.required],
      shippingPostalCode: ['', Validators.required],
      shippingCountry: ['', Validators.required]
    });
  }

  get isLoggedIn(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.authFormGroup.patchValue({
      email: this.authService.currentUser?.getEmail()
    });
    // this.isLoggedIn.pipe(
    //   takeWhile(() => this.isAlive),
    //   filter((isLoggedIn) => isLoggedIn)
    // ).subscribe(() => {
    //   const userContactInformation = this.contactService.getContact();
    //   console.log({ userContactInformation })
    // })
    this.checkoutFormValue$.pipe(
      take(1),
      tap((formValues) => {
        const { contactInformation, shippingInformation } = formValues;
        this.authFormGroup.patchValue({
          ...contactInformation, ...shippingInformation
        }, { emitEvent: false });
      })
    ).subscribe();

    this.authFormGroup.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map(() => this.formValueFactory(this.authFormGroup)),
      tap((data) => {
        this.checkoutformState.saveForm(data);
      })
    ).subscribe()
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  get authFormControlsError() {
    return this.authFormGroup.errors;
  }

  formValueFactory(formGroup: FormGroup) {
    const { address, city, email, firstName, lastName, phone, shippingCountry, shippingPhone, shippingPostalCode, shippingState } = formGroup.value;
    return {
      contactInformation: {
        phone, email
      },
      shippingInformation: {
        address, city, firstName, lastName, shippingCountry, shippingPhone, shippingPostalCode, shippingState
      }
    }
  }

  async submit() {
    this.btnState = 'loading';
    const isLoggedIn = await this.isLoggedIn.toPromise();
    // NO PASSSWORD OR CONFIRM PASSWORD -- SIGN UP AND CONTINUE
    // PASSWORD
    //LOGGED IN
    if (!isLoggedIn) {
      this.btnState = 'idle';
      const snackBarRef = this._snackBar.open('You need to login to proceed', 'Ok');
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/auth', 'login'])
      })
      return
    }
    const payload = this.formValueFactory(this.authFormGroup);
    await this.checkoutformState.updateContact(payload);
    this.btnState = 'idle';
    await this.router.navigate(['checkout', 'shipping-contact']);
  }
}
