import { Component } from '@angular/core';

import { CheckoutComponent } from '../../checkout.component';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.scss'],
})
export class FormPaymentComponent {
  form = this.container.getPayment();

  sameAdress = true;

  constructor(public container: CheckoutComponent) {}

  send() {
    console.log(this.container.form.value);
  }

  addAdress() {
    this.sameAdress ? this.form.get('billingAdress')?.enable() : this.form.get('billingAdress')?.disable()
    this.sameAdress = !this.sameAdress
  }
}
