import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsData } from 'src/app/models/products-data.model';
import { Wishlist } from 'src/app/models/wishlist.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  productsData: ProductsData[] = []
  wishlistData: Wishlist[] =[]
  data: any = []
  constructor(private wishlistService: WishlistService ,private cartService: CartService, private router: Router, private productsDataService: ProductsDataService) { }
  ngOnInit(): void {
    
    this.productsDataService.getProducts().subscribe(res => {
      this.productsData = res
      this.wishlistService.getWishlistData().subscribe(res => {
        this.wishlistData = res
        this.productsData.map((p: any) => {
          this.wishlistData.filter((w: any) => {
              if(w.img === p.img) {
                this.data.push(p)
              }
          })
        })
      })
    })
  }

  addToCart(product: Wishlist) {
    this.cartService.addToCart({ img: product.img, title: product.title, price: product.price, color: "black", size: "S", quantity: 1 }).subscribe(res => {
      if(res.status === 200) this.router.navigate(['/cart'])
    })
  }
}
