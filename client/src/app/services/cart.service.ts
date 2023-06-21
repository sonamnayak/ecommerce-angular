import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Cart } from '../models/cart.model';
import { environment as env } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers!: HttpHeaders
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({'content-type': 'application/json'})
  }

  getCartData(): Observable<Cart[]> {
    return this.client.get<Cart[]>(env.apiAddress + '/cart')
  }

  addToCart(product: Cart): Observable<HttpResponse<any>> {
    return this.client.post(env.apiAddress + '/cart', JSON.stringify(product), {headers: this.headers, observe: 'response'})
  }
}
