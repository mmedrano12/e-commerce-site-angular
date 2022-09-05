import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //getItems call from cartService to retrieve the list of items in the cart
  items = this.cartService.getItems();


  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  //lets users submit their name and address, also the cart clears itself after the order is sent
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your Order has been submitted', this.checkoutForm.value);
    window.alert('Thank you for your purchase!')
    this.checkoutForm.reset();
  }

}
