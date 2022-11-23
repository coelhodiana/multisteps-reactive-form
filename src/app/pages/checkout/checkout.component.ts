import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  form: FormGroup = this.fb.group({
    user: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    }),
    payment: this.fb.group({
      type: ['pix', Validators.required],
    }),
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  getUser() {
    return this.form.get('user') as FormGroup;
  }

  getPayment() {
    return this.form.get('payment') as FormGroup;
  }
}
