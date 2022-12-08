import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fileTypeChecker(type: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fileType = control.value.includes(type);

    console.log(fileType)

    return !fileType ? { invalidFileType: true } : null;
  };
}
