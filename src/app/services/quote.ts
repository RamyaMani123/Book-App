import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = `${environment.apiUrl}/quotes`;

  constructor(private http: HttpClient) { }
  private getAuthHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  // GET ALL quotes
  getQuotes() {
    return this.http.get<any[]>(this.apiUrl, this.getAuthHeaders());
  }

 
  getQuoteById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // ADD quote
  addQuote(quote: any) {
    return this.http.post(this.apiUrl, quote, this.getAuthHeaders());
  }

  // UPDATE Quote
  updateQuote(id: number, quote: any) {
    return this.http.put(`${this.apiUrl}/${id}`, quote, this.getAuthHeaders());
  }

  // DELETE Quote
  deleteQuote(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
}
