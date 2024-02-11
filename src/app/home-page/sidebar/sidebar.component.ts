
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksData } from '../../books.const';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() inputValue = "";
  @Output() categorySelected = new EventEmitter<string>();

  categories : String[] | any = [];

constructor() {
  this.categories = Array.from(new Set(BooksData.map(book => book.category)));
  console.log(this.categories);
}

changeCategory(category: string) {
  this.categorySelected.emit(category);
}

mainPage(){
  this.categorySelected.emit("");
}

}