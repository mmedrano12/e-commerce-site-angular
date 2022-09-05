import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //getItems call from cartService to retrieve the list of items in the cart
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
