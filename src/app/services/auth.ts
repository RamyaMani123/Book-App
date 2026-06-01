import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://book-api-backend-bg5n.onrender.com/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // LOGIN API + STORE USER
  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, data);
  }

  // REGISTER API
  register(data: any) {
    return this.http.post<any>(`${this.apiUrl}/api/auth/register`, data);
  }

  // SAVE LOGIN DATA
  setSession(token: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }

  // GETTERS
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

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
