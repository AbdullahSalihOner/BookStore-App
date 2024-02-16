import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookModel } from './home-page/home-page.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  subject = new Subject<BookModel[]>();

  constructor() { }

  addCart(book: BookModel[]) {
    this.subject.next(book);  
  }

  getCart() {
    this.subject.subscribe((data) => {
      console.log(data);
    })
  }
}
