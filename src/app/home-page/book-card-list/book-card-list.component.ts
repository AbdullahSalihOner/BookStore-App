import { Component, Input, SimpleChange } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { BooksData } from '../../books.const';
import { BookModel } from '../home-page.component';

@Component({
  selector: 'app-book-card-list',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './book-card-list.component.html',
  styleUrl: './book-card-list.component.scss'
})
export class BookCardListComponent {
  @Input() books:BookModel[] = [];

  @Input() categoryName= "";

  filteredBooks: BookModel[] | any= [];
  ngOnInit() {
    
  }

  ngOnChanges(changes : SimpleChange):void {
    this.filteredBooks = this.books;
    if(this.categoryName) {
      this.filteredBooks = this.books.filter(book => book.category === this.categoryName);
    }
  }

  addToCart(book:BookModel) {
    console.log('addCart', book);
  }
   

}

