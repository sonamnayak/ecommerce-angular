import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wishlist } from '../models/wishlist.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  headers!: HttpHeaders
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({'content-type': 'application/json'})
  }

  getWishlistData(): Observable<Wishlist[]> {
    return this.client.get<Wishlist[]>(env.apiAddress + '/wishlist')
  }

  addToWishlist(product: Wishlist): Observable<HttpResponse<any>> {
    return this.client.post(env.apiAddress + '/wishlist', JSON.stringify(product), {headers: this.headers, observe: 'response'})
  }
}
