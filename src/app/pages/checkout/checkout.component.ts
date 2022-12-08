import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  form = this.fb.nonNullable.group({
    user: this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: '',
      adress: this.fb.nonNullable.group({
        name: '',
        street: '',
        complements: '',
        state: '',
        city: '',
        zipcode: ['', Validators.required],
      }),
    }),
    payment: this.fb.nonNullable.group({
      type: ['pix'],
      shippingMethod: 'retirada',
      hasBillingAdress: true,
      billingAdress: {value: '', disabled: true},
      coupon: '',
      terms: [false, Validators.requiredTrue],
    }),
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  getUser() {
    return this.form.get('user') as FormGroup;
  }

  getPayment() {
    return this.form.get('payment') as FormGroup;
  }


}
