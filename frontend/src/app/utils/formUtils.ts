import {FormGroup} from '@angular/forms';

export function checkFormGroupErrors(formGroup: FormGroup, error: string, control: string) {
  if (formGroup.controls[control].touched) {
    return formGroup.controls[control].hasError(error);
  }
}
