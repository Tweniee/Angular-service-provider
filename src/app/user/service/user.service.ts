import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { user } from '../interface/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  registerUser(json: any) {
    json.role = Number(json.role);
    delete json.confirmPassword;
    this.httpClient.post(environment.URL + '/signup', json).subscribe((res) => {
      console.log(res);
    });
  }
  loginForm(json: any) {
    delete json.rememberMe;
    return this.httpClient.post(environment.URL + '/login', json).toPromise()
  }
  emailVerification(param: any) {
    console.log(param);
    return this.httpClient.get(
      environment.URL + '/verificationById/' + param['id']
    );
  }

  forgotPassword(email: string) {
    return this.httpClient.post(environment.URL + '/resetPassword', { email });
  }
}
