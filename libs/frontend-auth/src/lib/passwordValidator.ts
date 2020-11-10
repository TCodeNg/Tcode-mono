import { AbstractControl } from '@angular/forms';

export const validatePassword = (control: AbstractControl): {[key: string]: boolean} => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if(!password && !confirmPassword ) return {passwordMissing: true};
    if(password === confirmPassword) return null;
    return {passwordMatch: true}
}