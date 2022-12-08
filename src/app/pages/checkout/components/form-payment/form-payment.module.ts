import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormPaymentComponent } from './form-payment.component';
import { FormPaymentRoutes } from './form-payment.routing';

@NgModule({
  imports: [CommonModule, FormPaymentRoutes, ReactiveFormsModule],
  declarations: [FormPaymentComponent],
})
export class FormPaymentModule {}
