import { Inject, Injectable } from '@angular/core';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { NgxsOnInit, Selector, State } from '@ngxs/store';
import { AuthService, AUTH_SERVICE_TOKEN } from '@tcode/frontend-auth';
import { ContactService, CONTACT_SERVICE_TOKEN } from '@tcode/contact';
import { CheckoutFormModel } from './checkout-form.state.model';

@StateRepository()
@Injectable()
@State<CheckoutFormModel>({
  name: 'checkoutForm'
})
export class CheckoutFormState extends NgxsDataRepository<CheckoutFormModel> implements NgxsOnInit {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService,
    @Inject(CONTACT_SERVICE_TOKEN) private contactService: ContactService
  ) {
    super()
  }

  @Selector()
  static getState(state: CheckoutFormModel): any {
    return state;
  }

  ngxsOnInit() {

  }

  @DataAction() async saveForm(payload: any) {
    const { patchState } = this.ctx;
    const isLoggedIn = await this.authService.isLoggedIn().toPromise();
    patchState({
      shippingInformation: payload.shippingInformation,
      contactInformation: payload.contactInformation
    });
    if (isLoggedIn) {
      // CALL CONTACT SERVICE TO SAVE CONTACT INFORMATION
      this.updateContact(payload);
    }
  }

  @DataAction() async updateContact(payload: any) {
    const { patchState } = this.ctx;
    const save = await this.contactService.updateContact(payload).toPromise();
    patchState({
      updatedAt: new Date(Date.now())
    })
  }
}