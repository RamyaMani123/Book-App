import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../../services/quote';

@Component({
  selector: 'app-edit-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-quote.component.html'
})
export class EditQuoteComponent {

  quote: any = {
    title: '',
    author: ''
  };

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private service: QuoteService,
    private router: Router
  ) { }

  ngOnInit() {

    this.id =
      Number(this.route.snapshot.paramMap.get('id'));

    this.service.getQuoteById(this.id)
      .subscribe(data => {
        this.quote = data;
      });
  }

  updateQuote() {

    this.service.updateQuote(this.id, this.quote)
      .subscribe(() => {

        alert('Quote Updated');

        this.router.navigate(['/quotes']);
      });
  }
}
