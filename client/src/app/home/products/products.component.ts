import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsData } from 'src/app/models/products-data.model';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { SearchDataService } from 'src/app/services/search-data.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private productsDataService: ProductsDataService, private searchDataService: SearchDataService, private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private wishlistService: WishlistService) { }
  productsData: ProductsData[] = this.productsDataService.productsData
  category!: string | null
  currentRoute!: string | undefined

  ngOnInit(): void {
    this.productsDataService.getProducts().subscribe(response => {
      if(response.length !== 0) this.productsData = response
      this.currentRoute = this.activatedRoute?.component?.name
      this.activatedRoute.params.subscribe(res => {
        this.productsData = response
        this.category = res['cat']
        if (this.category) this.productsData = this.productsData.filter((x: any) => x.cat === this.category)
        else {
          this.productsData = this.productsData.filter((x: any) => x.bestseller === true)
          this.productsData.splice(8, this.productsData.length - 8)
        }
      });

    })

  }

  addToCart(product: ProductsData) {
    this.cartService.addToCart({ img: product.img, title: product.title, price: product.price, color: "black", size: "S", quantity: 1 }).subscribe(res => {
      if (res.status === 200) this.router.navigate(['/cart'])
    })
  }

  addToWishlist(product: ProductsData) {
    this.wishlistService.addToWishlist({ img: product.img, title: product.title, price: product.price, color: "black", size: "S", quantity: 1 }).subscribe(res => {
      if (res.status === 200) this.router.navigate(['/wishlist'])
    })
  }
}