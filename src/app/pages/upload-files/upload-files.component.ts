import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { fileTypeChecker } from './validators/file-type-checker';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFilesComponent {
  form = this.fb.group({
    files: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  get files() {
    return this.form.get("files") as FormArray
  }

  get fileForm() {
    return this.files.get("file") as FormGroup;
  }

  selectFile(event: any) {
    const filesEvent = Array.from(event.target.files);

    return filesEvent.forEach((item: any) => {

      const fileForm = this.fb.group({
        name: [item.name, fileTypeChecker('.txt')],
        description: '',
        file: item
      });

      this.files.push(fileForm);
    });
  }

  removeFile(i: number) {
    this.files.removeAt(i);
  }


}
