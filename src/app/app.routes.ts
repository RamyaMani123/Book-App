import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },

  {
    path: 'books',
    loadComponent: () =>
      import('./pages/books/books.component')
        .then(m => m.BooksComponent)
  },

  {
    path: 'books/add',
    loadComponent: () =>
      import('./pages/books/add-book.component')
        .then(m => m.AddBookComponent)
  },

  {
    path: 'books/edit/:id',
    loadComponent: () =>
      import('./pages/books/edit-book.component')
        .then(m => m.EditBookComponent)
  },

  // 🔥 ADD THESE
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(m => m.LoginComponent)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component')
        .then(m => m.RegisterComponent)
  },
  
  {
    path: 'homeuser',
    loadComponent: () =>
      import('./pages/home/homeuser.component')
        .then(m => m.HomeUserComponent)
  },

  {
    path: 'quotes',
    loadComponent: () =>
      import('./pages/quotes/quotes.component')
        .then(m => m.QuotesComponent)
  },
  {
    path: 'quotes/add',
    loadComponent: () =>
      import('./pages/quotes/add-quote.component')
        .then(m => m.AddQuoteComponent)
  },
  {
    path: 'quotes/edit/:id',
    loadComponent: () =>
      import('./pages/quotes/edit-quote.component')
        .then(m => m.EditQuoteComponent)
  },
 
  {
    path: '**',
    redirectTo: 'books'
  }
];
