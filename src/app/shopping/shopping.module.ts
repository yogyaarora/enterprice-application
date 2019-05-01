import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { OrderSuccessComponent } from '../order-success/order-success.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { ShoppingCartSummaryComponent } from '../shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from '../shipping-form/shipping-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from '../products/products.component';
import { ProductFilterComponent } from '../products/product-filter/product-filter.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent,
    ProductsComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class ShoppingModule { }
