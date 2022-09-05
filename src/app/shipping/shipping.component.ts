import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  //defining the shipping costs property
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(
    private cartService: CartService,
    ) { }
  
  //setting the shipping costs to what is retrieved from the json file
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
