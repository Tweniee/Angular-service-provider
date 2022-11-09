import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getDecodedAccessToken(): any {
    try {
      return jwt_decode(sessionStorage.getItem('token'));
    } catch (Error) {
      return null;
    }
  }
}
