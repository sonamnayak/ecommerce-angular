import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsData } from 'src/app/models/products-data.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductsDataService]
})
export class ProductDetailComponent implements OnInit {
  constructor(private productsDataService: ProductsDataService, private activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router, private wishlistService: WishlistService) { }
  product!: { img: string, cat: string, title: string, price: number, desc: string, colors: Array<string>, sizes: Array<string>, bestseller: boolean } | undefined
  productId: any
  value: number = 1
  currentProduct: any
  currentSize: string = "XS"
  currentColor: string = "black"
  data!: any
  parsedData!: any
  unique: boolean = true
  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')
    this.productsDataService.getProduct(this.productId).subscribe(res => this.product = res)
  }

  decreaseValue() {
    if (this.value > 1) this.value--
  }

  increaseValue() {
    if (this.value < 10) this.value++
  }

  getSize(size: HTMLSelectElement) {
    this.currentSize = size.value
  }
  getColor(color: HTMLInputElement) {
    this.currentColor = color.value.toLowerCase()
  }

  addToCart(product: ProductsData) {
    this.cartService.addToCart({ img: product.img, title: product.title, price: product.price * this.value, color: this.currentColor, size: this.currentSize, quantity: this.value }).subscribe(res => {
      if(res.status === 200) this.router.navigate(['/cart'])
    })
  }

  addToWishlist(product: ProductsData) {
    this.wishlistService.addToWishlist({ img: product.img, title: product.title, price: product.price, color: "black", size: "S", quantity: 1 }).subscribe(res => {
      if(res.status === 200) this.router.navigate(['/wishlist'])
    })
  }
}