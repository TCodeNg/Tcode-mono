import { Inject, Injectable } from '@angular/core';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { NgxsOnInit, Selector, State } from '@ngxs/store';
import { AuthService, AUTH_SERVICE_TOKEN } from '@tcode/frontend-auth';
import { CheckoutFormModel } from './checkout-form.state.model';

@StateRepository()
@Injectable()
@State<CheckoutFormModel>({
  name: 'checkoutForm'
})
export class CheckoutFormState extends NgxsDataRepository<CheckoutFormModel> implements NgxsOnInit {
  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: AuthService) {
    super()
  }

  ngxsOnInit() {

  }

  @Selector()
  static getState(state: CheckoutFormModel): any {
    return state;
  }

  @DataAction() async saveForm(payload: any) {
    const { patchState } = this.ctx;
    const isLoggedIn = this.authService.isLoggedIn().toPromise();
    patchState({
      shippingInformation: payload.shippingInformation,
      contactInformation: payload.contactInformation
    });
    if (isLoggedIn) {
      // CALL CHECKOUT SERVICE TO SAVE INFORMATION
    }
  }
}