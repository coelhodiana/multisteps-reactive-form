import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CheckoutComponent } from './../../checkout.component';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.scss'],
})
export class FormPaymentComponent implements OnInit {

  form: FormGroup;

  constructor(public container: CheckoutComponent) {
    this.form = this.container.getPayment();
  }

  ngOnInit(): void {}

}
