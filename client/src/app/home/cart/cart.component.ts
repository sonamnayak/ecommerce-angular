import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], 
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  productsData: Cart[] = []
  totalAmt: number = 0
  ngOnInit() :void {
    this.cartService.getCartData().subscribe(res => {
      this.productsData = res
      this.productsData.forEach(x => this.totalAmt = x.price + this.totalAmt)
    })
  }
}
