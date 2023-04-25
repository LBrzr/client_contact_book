import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endpoints from '../resources/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(endpoints.auth, {
      username,
      password,
    });
  }

  getToken(): string | null {
    return localStorage.getItem('token') || '91c86q8t86rb013epv0vgks7i5';
  }

  getHeaders() {
    return {
      // Authorization: ' ' + this.getToken(),
      Authorization: 'Basic OjY0NDdhOWY5N2Y4ZTM3MDY5NTkyNDI=',
      Accept: 'application/api.rest-v1+json',
      ContentType: 'application/json',
    };
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
