import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerData = {
    username: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register() {

    this.http.post(
      'http://localhost:5110/api/auth/register',
      this.registerData
    ).subscribe({
      next: (response) => {
        console.log(response);
        alert('Registration Successful');
        this.router.navigate(['/login']);
      },

      error: (error) => {
        console.error(error);
        alert(error.error);
      }
    });
  }
}
