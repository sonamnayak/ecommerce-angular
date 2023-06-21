import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../services/search-data.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private searchDataService: SearchDataService, private router: Router, private cartService: CartService) {}
  searchText: string = ""
  totalCartItems: number = 0

  searchProduct() {
    this.searchDataService.searchData(this.searchText)
  }

  search() {
    this.router.navigate(['/products/', this.searchText])
  }

  ngOnInit(): void {
    this.cartService.getCartData().subscribe(res => {
      this.totalCartItems = res.length
    })
  }
}
