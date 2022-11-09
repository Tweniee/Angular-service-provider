import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isLogin: boolean = true;
  isRegister: boolean = false;
  isForgotPassword: boolean = false;

  constructor(public service: UserService) {}
  forgotEmail!: string;
  isEmailSent: boolean = false;
  ngOnInit() {}

  navClick(tabName: string) {
    if (tabName === 'login') {
      this.isLogin = true;
      this.isRegister = false;
    } else if (tabName === 'register') {
      this.isRegister = true;
      this.isLogin = false;
    }
  }
  isForgot() {
    this.isForgotPassword = true;
  }
  isRegisterClicked() {
    this.navClick('register');
  }
  reset() {
    this.service.forgotPassword(this.forgotEmail).subscribe(data=>{
      this.isEmailSent = true;
      setTimeout(() => {
        this.isForgotPassword=false;
      }, 3000);
    })
    
  }
}
