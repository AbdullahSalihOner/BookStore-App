import { Component } from '@angular/core';
import { BooksData } from '../books.const';
import { BookCardListComponent } from "./book-card-list/book-card-list.component";
import { BookTableListComponent } from "./book-table-list/book-table-list.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [BookCardListComponent, BookTableListComponent, SidebarComponent]
})
export class HomePageComponent {
  books : BookModel[] | any= BooksData;

  categoryName: string = "";
  ngOnInit() {
    console.log(this.books);
    
  }

  getBooksByCatgeory(category: string) { 
    console.log(category);
    this.categoryName = category;
  }
}

export interface BookModel {
  name: string;
  author: string;
  year: number;
  image: string;
  category: string;
  star: number;
  id: number;
}
