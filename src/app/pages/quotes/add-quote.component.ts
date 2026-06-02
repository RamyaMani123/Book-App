import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteService } from '../../services/quote';

@Component({
  selector: 'app-add-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-quote.component.html'
})
export class AddQuoteComponent {

  quote = {
    text: '',
  };

  isSubmitting = false; // ⭐ prevent double click

  constructor(
    private service: QuoteService,
    private router: Router
  ) { }

  addQuote() {

    const trimmedText = this.quote.text.trim();

    // ✅ validation
    if (!trimmedText) {
      alert('Please enter a quote');
      return;
    }

    this.isSubmitting = true;

    const newQuote = {
      text: trimmedText 
    };

    this.service.addQuote(newQuote).subscribe({
      next: () => {

        alert('Quote added successfully');

        this.quote.text = '';

        this.isSubmitting = false;

        this.router.navigateByUrl('/quotes');
      },
      error: (err) => {

        console.error('Error adding quote:', err);

        alert(
          `Status: ${err.status}\n` +
          `Error: ${JSON.stringify(err.error)}`
        );

        this.isSubmitting = false;
      }
    });
  }
}
