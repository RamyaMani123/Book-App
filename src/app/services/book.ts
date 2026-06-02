import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  // GET ALL BOOKS
  getBooks() {
    return this.http.get<any[]>(this.apiUrl, this.getAuthHeaders());
  }

  // GET BOOK BY ID
  getBookById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // ADD BOOK
  addBook(book: any) {
    return this.http.post(this.apiUrl, book, this.getAuthHeaders());
  }

  // UPDATE BOOK
  updateBook(id: number, book: any) {
    return this.http.put(`${this.apiUrl}/${id}`, book, this.getAuthHeaders());
  }

  // DELETE BOOK
  deleteBook(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
}
