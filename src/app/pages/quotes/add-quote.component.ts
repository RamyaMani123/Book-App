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

  quote= {
    text: '',
   
  };

  constructor(
    private service: QuoteService,
    private router: Router
  ) { }

  addQuote() {

    this.service.addQuote(this.quote)
      .subscribe(() => {

        alert('quote Added');

        this.quote = {
          text: '',
          
        };

        this.router.navigateByUrl('/quotes');
      });
  }
}
