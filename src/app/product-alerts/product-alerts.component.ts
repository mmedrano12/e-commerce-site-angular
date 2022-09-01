import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  
  @Input() product! : Product;

  //@output allows the component to emit an event when the value of notify changes
  @Output() notify = new EventEmitter();

}
