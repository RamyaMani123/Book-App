import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // LOGIN
  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }

  // REGISTER
  register(data: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  // STORE SESSION
  setSession(token: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  // GET TOKEN
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // GET USERNAME
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  // CHECK LOGIN
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}
