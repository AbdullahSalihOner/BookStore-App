import { Component } from '@angular/core';
import { BookModel } from '../home-page/home-page.component';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {

  cartList : BookModel[]  = [];
  ngOnInit() {
    this.cartList.push
  }
}
