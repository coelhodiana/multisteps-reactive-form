import { FormControl, FormGroup, Validators } from '@angular/forms';

export const formUserInicialValues = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
});
