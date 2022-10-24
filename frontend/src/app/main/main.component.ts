import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Product } from '../shared/models/product';
import { AuthService } from '../shared/services/auth.service';
import { ProductService } from '../shared/services/product.service';
import { CartService } from './../shared/services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  fetchedProducts$: any;
  totalSum = 0;
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchedProducts$ = this.productService.getProducts().pipe();
    this.totalCalculation();
  }

  totalCalculation() {
    const objects = this.cartService.products$.value;
    const sum = objects.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.quantity,
      0
    );
    this.totalSum = sum;
  }
  logout() {
    this.authService.logout();
    this.router
      .navigate(['/login'])
      .then((_) => console.log('logout successfully!'));
  }

  addToCart(product: Product) {
    this.cartService.addToCart({ ...product, quantity: 1 });
    this.totalCalculation();
  }

  submitOrder() {
    this.productService
      .postOrder({ products: this.cartService.getProduct() })
      .pipe(
        tap(() => {
          this.cartService.clearProducts();
          this.totalCalculation();
        })
      )
      .subscribe(),
      (err: Error) => {
        console.log('error occurred while submitting the order');
      };
  }
}
