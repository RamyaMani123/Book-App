import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
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
    this.http.post(`${environment.apiUrl}/auth/register`, this.registerData)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          alert('Registration Successful');
          this.router.navigate(['/login']);
        },

        error: (error: any) => {
          console.error(error);
          alert(error.error || 'Registration failed');
        }
      });
  }
}
