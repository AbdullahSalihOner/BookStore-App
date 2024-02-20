import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookModel } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor() { }

  addCart(books: BookModel[]) {
    const payload = JSON.stringify(books);
    localStorage.setItem('cart', payload);
  }

  getCart() {
    const response = localStorage.getItem('cart');
  
    if (response) {
      // veriyi parse ederek tekrardan obje haline getiriyoruz(string -> obje)
      return JSON.parse(response);
    }
    else {
      return [];
    }

  }


  
}
