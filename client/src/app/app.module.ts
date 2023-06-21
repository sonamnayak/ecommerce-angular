import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { DirectionDirective } from './directives/direction.directive';
import { CategoriesComponent } from './home/categories/categories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './home/cart/cart.component';
import { WishlistComponent } from './home/wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActivateGuardService } from './services/activate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    DirectionDirective,
    CategoriesComponent,
    NotFoundComponent,
    CartComponent,
    WishlistComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [ActivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
