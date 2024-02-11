import { Component, Input } from '@angular/core';
import { BookModel } from '../home-page.component';

@Component({
  selector: 'app-book-table-list',
  standalone: true,
  imports: [],
  templateUrl: './book-table-list.component.html',
  styleUrl: './book-table-list.component.scss'
})
export class BookTableListComponent {
  @Input() books:BookModel[] = [];
}
