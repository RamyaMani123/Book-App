import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
      'http://localhost:5110/api/auth/login',
      this.user
    ).subscribe({

      next: (response) => {

        console.log(response);

        // ✅ SAVE TOKEN
        localStorage.setItem('token', response.token);

        // ✅ SAVE USERNAME (from backend OR fallback)
        localStorage.setItem('username', response.username || this.user.username);

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
