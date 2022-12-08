import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CheckoutComponent } from './../../checkout.component';

@Component({
  selector: 'app-form-adress',
  templateUrl: './form-adress.component.html',
  styleUrls: ['./form-adress.component.scss']
})
export class FormAdressComponent implements OnInit {
  constructor(private container: CheckoutComponent, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
