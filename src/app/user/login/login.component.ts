import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  @Output() Forgot = new EventEmitter();
  @Output() register = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public service: UserService,public router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  isEmty(obj: object | null) {
    return !isEmpty(obj);
  }

  submit() {
    this.submitted = true;
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }
    this.service.loginForm(this.loginForm.value).then((res) => {
      sessionStorage.setItem("token",res['auth'].toString())
      this.router.navigateByUrl('/home');
    });
    this.onReset();
  }
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
  isRegister() {
    this.register.emit();
  }
  isForgot() {
    this.Forgot.emit();
  }
}
