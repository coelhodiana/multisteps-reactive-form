import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadFilesComponent } from './upload-files.component';

const routes: Routes = [
  {
    path: '',
    component: UploadFilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadFilesRoutes {}
