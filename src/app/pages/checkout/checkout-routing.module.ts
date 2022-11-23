import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./components/form-user/form-user.module').then(
            (module) => module.FormUserModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./components/form-payment/form-payment.module').then(
            (module) => module.FormPaymentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
