import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CheckoutComponent } from './../../checkout.component';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  form: FormGroup;

  constructor(private container: CheckoutComponent) {
    this.form = this.container.getUser();
   }

  ngOnInit() {

  }

}
