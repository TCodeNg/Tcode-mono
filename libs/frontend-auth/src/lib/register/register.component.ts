import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { AUTH_CONFIG_TOKEN, AuthConfig } from '../auth.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthState } from '../+state/auth.state';
import { validatePassword } from './validator';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tcode-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  signUpFormGroup: FormGroup;
  config: AuthConfig;
  isAlive: boolean;
  isLoading = new BehaviorSubject(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(
    @Inject(AUTH_CONFIG_TOKEN) config: AuthConfig, 
    fb: FormBuilder, private auth: AuthState, 
    private firebaseAuth: AngularFireAuth, 
    private firestore: AngularFirestore,
    private router: Router,
    public _snackBar: MatSnackBar
    ) {
    this.config = config;
    this.isAlive = true;
    this.signUpFormGroup = fb.group({
      username: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: validatePassword });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  get isPasswordMatchError(): boolean {
    return (
      this.signUpFormGroup.controls.confirmPassword.touched &&
      this.signUpFormGroup.controls.password.dirty &&
      this.signUpFormGroup.hasError('passwordMatch')
    );
  }

  async submit() {
    this.isLoading.next(true);
    const { email, password, username, phoneNumber, lastName, firstName, address } = this.signUpFormGroup.value;
    const payload = {
      Email: email,
      Username: username,
      Phone: phoneNumber,
      Lastname: lastName,
      Firstname: firstName,
      Address: address
    }
    try {
      const newUser = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
     try {
       const userId = newUser.user.uid;
       await this.firestore.collection("profiles").doc(userId).set(payload, {merge: true});
       this.isLoading.next(false);
       this.router.navigate(['/auth', 'login']);
     } catch (error) {
      this._snackBar.open(error.message, null, {
        duration: 2000
      })
      this.isLoading.next(false);
     }
    } catch (error) {
      this._snackBar.open(error.message, null, {
        duration: 2000
      })
      this.isLoading.next(false);
    } 
  }

}
