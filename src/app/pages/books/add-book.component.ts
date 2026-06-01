import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html'
})
export class AddBookComponent {

  book = {
    title: '',
    author: '',
    publicationDate: new Date().toISOString().split('T')[0]
  };

  constructor(
    private service: BookService,
    private router: Router
  ) { }

  addBook() {

    this.service.addBook(this.book)
      .subscribe(() => {

        alert('Book Added');

        this.book = {
          title: '',
          author: '',
          publicationDate: new Date().toISOString().split('T')[0]
        };

        this.router.navigateByUrl('/books');
      });
  }
}
