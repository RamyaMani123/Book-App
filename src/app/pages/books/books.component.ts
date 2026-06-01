import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  books: any[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private service: BookService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    // check login
    this.isLoggedIn = !!localStorage.getItem('token');

    this.loadBooks();
  }
  loadBooks(): void {
    this.service.getBooks().subscribe({
      next: (data) => {
              console.log("API RESPONSE:", data); 
        this.books = data;
        this.cd.detectChanges();
        console.log('Books loaded:', this.books);
      },
      error: (err) => {
        console.error('Error loading books:', err);
      }
    });
  }

  deleteBook(id: number): void {

    const confirmed = confirm(
      'Are you sure you want to delete this book?'
    );

    if (!confirmed) {
      return;
    }

    this.service.deleteBook(id).subscribe({
      next: () => {
        console.log('Book deleted');
        this.loadBooks();
      },
      error: (err) => console.error(err)
    });
  }

  editBook(id: number) {
    this.router.navigate(['/books/edit', id]);
  }
}
