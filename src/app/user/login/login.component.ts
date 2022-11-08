import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,public service :UserService) {
    this.loginForm = this.formBuilder.group(
      { 
        email: ['', [Validators.required, Validators.email]], 
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  ngOnInit(): void {
    
  }

   // convenience getter for easy access to form fields
   get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  submit(){
    if (this.loginForm.invalid) {
      return;
    }
    this.service.loginForm(this.loginForm.value)
    this.onReset()
  }
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
