import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CheckoutComponent } from '../../checkout.component';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  form: FormGroup = this.container.getUser();

  constructor(private container: CheckoutComponent, private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.form.value)
  }

  reset() {
    this.form.reset();
  }
}
