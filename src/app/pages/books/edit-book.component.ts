import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent {

  book: any = {
    title: '',
    author: ''
  };

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private service: BookService,
    private router: Router
  ) { }

  ngOnInit() {

    this.id =
      Number(this.route.snapshot.paramMap.get('id'));

    this.service.getBookById(this.id)
      .subscribe(data => {
        this.book = data;
      });
  }

  updateBook() {

    this.service.updateBook(this.id, this.book)
      .subscribe(() => {

        alert('Book Updated');

        this.router.navigate(['/books']);
      });
  }
}
