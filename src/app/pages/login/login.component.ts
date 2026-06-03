import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    username: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login() {
    this.http.post<any>(
      `${environment.apiUrl}/auth/login`,
      this.user
    ).subscribe({

      next: (response: any) => {

        console.log(response);

        // save token
        localStorage.setItem('token', response.token);

        // backend only returns token → username fallback is correct
        localStorage.setItem('username', this.user.username);

        alert('Login Successful');

        this.router.navigate(['/homeuser']);
      },

      error: (error) => {
        console.log(error);
        alert('Invalid username or password');
      }

    });
  }
}
