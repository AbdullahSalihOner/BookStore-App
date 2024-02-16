import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../home-page.component';

@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [],
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() bookList: BookModel[] = [];
  @Output() addCart = new EventEmitter<BookModel>();

  addToCart(book:BookModel){
   this.addCart.emit(book);
   
  }
}
