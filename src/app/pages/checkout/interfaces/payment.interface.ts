import { Adress } from './adress.interface';

export interface Payment {
  type: string;
  shippingMethod: string;
  hasBillingAdress: boolean;
  billingAdress: Adress;
  coupon: string;
  terms: boolean;
}
