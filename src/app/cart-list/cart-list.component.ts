import { Component } from '@angular/core';
import { BookModel } from '../home-page/home-page.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {

  cartList : BookModel[]  = [];

  constructor( private _bookService: BookService) { }

  ngOnInit() {
    this.cartList = this._bookService.getCart();
   
  }
  removeFromCart(event: BookModel) {
    this.cartList = this.cartList.filter((item: BookModel) => item.id !== event.id);
    this._bookService.addCart(this.cartList);
  }
}
