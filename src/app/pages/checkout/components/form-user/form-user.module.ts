import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormUserComponent } from '../../components/form-user/form-user.component';
import { FormUserRoutes } from './form-user.routing';

@NgModule({
  imports: [CommonModule, FormUserRoutes, ReactiveFormsModule],
  declarations: [FormUserComponent],
})
export class FormUserModule {}
