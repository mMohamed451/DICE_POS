import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { CartService } from './../shared/services/cart.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  products$ = this.cartService.products$;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  removeItemFromCart(product: Product) {
    this.cartService.removeProduct(product);
  }
}
