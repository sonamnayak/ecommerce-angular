import { Component } from '@angular/core';
import { ProductsDataService } from './services/products-data.service';
import { SearchDataService } from './services/search-data.service';
import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { WishlistService } from './services/wishlist.service';
import { CategoriesService } from './services/categories.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsDataService, SearchDataService, UserService, CartService, WishlistService, CategoriesService, AuthService]
})
export class AppComponent {
  title = 'ecommerce';
  constructor(private productsDataService: ProductsDataService, private searchDataService: SearchDataService, private userService: UserService, private cartService: CartService, private wishlistService: WishlistService, private categoriesServices: CategoriesService, private authService: AuthService){}
}
