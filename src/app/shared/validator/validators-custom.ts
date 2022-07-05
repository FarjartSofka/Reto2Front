import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class ValidatorsCustom {

  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0){
        return {cannotContainSpace: true}
    }

    return null;
  }

  static range(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { range: true };
        }
        return null;
    };
}


}
