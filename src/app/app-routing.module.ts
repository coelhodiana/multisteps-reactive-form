import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'checkout',
    loadChildren: () =>
    import('./pages/checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'upload',
    loadChildren: () =>
    import('./pages/upload-files/upload-files.module').then((m) => m.UploadFilesModule),
  },
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
