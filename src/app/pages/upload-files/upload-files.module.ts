import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UploadFilesComponent } from './upload-files.component';
import { UploadFilesRoutes } from './upload-files.routing';

@NgModule({
  imports: [CommonModule, UploadFilesRoutes, ReactiveFormsModule],
  declarations: [UploadFilesComponent],
})
export class UploadFilesModule {}
