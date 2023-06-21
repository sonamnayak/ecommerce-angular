import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './home/cart/cart.component';
import { WishlistComponent } from './home/wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActivateGuardService } from './services/activate-guard.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [ActivateGuardService]
  },
  {
    path: "products/product/:id",
    component: ProductDetailComponent
  },
  {
    path: "products/:cat",
    component: ProductsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
