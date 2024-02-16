import { Component } from '@angular/core';
import { BooksData } from '../books.const';
import { MatTableModule } from '@angular/material/table';
import { BookCardListComponent } from "./book-card-list/book-card-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [MatTableModule, BookCardListComponent, NavbarComponent]
})
export class HomePageComponent {
  books: BookModel[] | any = BooksData
  filteredBooks: BookModel[] | any = BooksData;
  cartList: BookModel[] = [];
  categories: string[] = ["Tümü"];

  constructor(private _router: Router, private _bookService: BookService) { }

  ngOnInit() {
    this.books.forEach((item: BookModel) => {
      if (!this.categories.includes(item.category)) {
        this.categories.push(item.category);
      }
    })
  }

  setBooksForCategories(event: string) {
    if (event !== "Tümü") {
      this.filteredBooks = this.books.filter((data: BookModel) => data.category === event)
    } else {
      this.filteredBooks = BooksData;
    }
  }

  goToCart() {
    this._router.navigateByUrl("/cart");
  }

  addToCart(event: BookModel) {
    this.cartList.push(event);
    this._bookService.addCart(this.cartList);
    
  }

 
}

export interface BookModel {
  name: string
  author: string
  year: number
  image: string
  category: string
  star: number
  id: number
}
