import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  /*
    Activated route is specific to each component and contains info
    about the route and the routes params
  */
  constructor(private route: ActivatedRoute) { }

  // we want to use the ngOnInit to extract the product Id from the route params and 
  // find the corresponding product in the products array
  ngOnInit(): void {
    
    // Get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product associated with the id
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
