import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  get username(): string | null {
    return localStorage.getItem('username');
  }

  // MOBILE MENU STATE
  isMenuOpen = false;

  // LOGIN CHECK
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // TOGGLE MOBILE MENU
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.isMenuOpen = false;

    // redirect to home page
    this.router.navigate(['/']);
  }

  // DARK MODE
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
  }

}
