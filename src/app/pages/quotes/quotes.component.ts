import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { QuoteService } from '../../services/quote';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quotes.component.html'
})
export class QuotesComponent implements OnInit {

  quotes: any[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private service: QuoteService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    // check login
    this.isLoggedIn = !!localStorage.getItem('token');

    this.loadQuotes();
  }
  loadQuotes(): void {
    this.service.getQuotes().subscribe({
      next: (data) => {
        console.log("API RESPONSE:", data);
        this.quotes = data;
        this.cd.detectChanges();
        console.log('Quotes loaded:', this.quotes);
      },
      error: (err) => {
        console.error('Error loading quotes:', err);
      }
    });
  }

  deleteQuote(id: number): void {

    const confirmed = confirm(
      'Are you sure you want to delete this quote?'
    );

    if (!confirmed) {
      return;
    }

    this.service.deleteQuote(id).subscribe({
      next: () => {
        console.log('Quote deleted');
        this.loadQuotes();
      },
      error: (err) => console.error(err)
    });
  }

  editQuote(id: number) {
    this.router.navigate(['/quotes/edit', id]);
  }
}
