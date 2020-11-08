export interface CheckoutFormModel {
  contactInformation: {
    phone?: string;
    email?: string;
  },
  shippingInformation: {
    firstName?: string;
    lastName?: string;
    address?: string;
    city?: string;
    shippingPhone?: string;
    shippingState?: string;
    shippingPostalCode?: string;
    shippingCountry?: string
  },
  updatedAt?: Date;
}

