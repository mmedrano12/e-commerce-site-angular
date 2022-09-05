import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient,
    ) { }

  //param - selected product
  // appends a product to items array
  addToCart(product: Product){
    this.items.push(product);
  }

  //returns items array
  getItems(){
    return this.items;
  }

  /*
    use httpclient get() to obtain shipping data from the shipping.json file
  */
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  //sets items array to an empty array and return that
  clearCart(){
    this.items = [];
    return this.items;
  }
}
