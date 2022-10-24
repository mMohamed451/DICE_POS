import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  products$ = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.loadCart();
  }

  getProduct() {
    return this.products$.value;
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.products$.value));
  }

  addToCart(addedProduct: Product) {
    let quantity!: number;
    const index = this.products$.value.findIndex((product: Product) => {
      quantity = product.quantity;
      return product._id === addedProduct._id;
    });
    if (index > -1) {
      this.products$.value.splice(index, 1, {
        ...addedProduct,
        quantity: ++quantity,
      });
      this.saveCart();
    } else {
      debugger;
      this.products$.value.push(addedProduct);
      this.saveCart();
    }
  }

  removeProduct(product: any) {
    const index = this.products$.value.findIndex(
      (x: any) => x.id === product.id
    );

    if (index > -1) {
      this.products$.value.splice(index, 1);
      this.saveCart();
    }
  }

  loadCart(): void {
    this.products$.next(
      JSON.parse(localStorage.getItem('cart_items') as any) || []
    );
  }

  productInCart(product: any): boolean {
    return this.products$.value.findIndex((x: any) => x.id === product.id) > -1;
  }

  clearProducts() {
    this.products$.next([]);
    localStorage.clear();
  }
}
