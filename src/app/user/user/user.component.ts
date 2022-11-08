import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isLogin: boolean = true;
  isRegister: boolean = false;

  constructor() {}

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
}
