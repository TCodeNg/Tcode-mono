import { AbstractControl } from '@angular/forms';

export const validatePassword = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  if (password === confirmPassword) return null;
  return { passwordMatch: true };
};
