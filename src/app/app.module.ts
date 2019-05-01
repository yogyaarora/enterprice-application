import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AdminAuthGuardComponent } from './admin-auth-guard/admin-auth-guard.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {CustomFormsModule} from 'ng2-validation';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';
import { ApplicationStateService } from './application-state.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminAuthGuardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'login',component:LoginComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      
      {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
      {path:'order-success/:id',component:OrderSuccessComponent,canActivate:[AuthGuardService]},
      {path:'my/orders',component:MyOrdersComponent,canActivate:[AuthGuardService]},
      
      {
        path:'admin/products/new',
        component:ProductFormComponent,
        canActivate:[AuthGuardService,AdminAuthGuardService]},
      {
        path:'admin/products/:id',
        component:ProductFormComponent,
        canActivate:[AuthGuardService,AdminAuthGuardService]},
      {
        path:'admin/products',
        component:AdminProductsComponent,
        canActivate:[AuthGuardService,AdminAuthGuardService]},
      {
        path:'admin/orders',
        component:AdminOrdersComponent,
        canActivate:[AuthGuardService,AdminAuthGuardService]},
      {
        path:'*',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [
    AdminAuthGuardService,
    ApplicationStateService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
