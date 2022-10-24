import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.apiUrl + '/product');
  }

  postOrder(order: Order): Observable<Order> { // TODO: should be in order service
    return this.httpClient.post<Order>(environment.apiUrl + '/order', order);
  }
}
