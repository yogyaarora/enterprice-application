import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
  
  @Input('product') product;
  @Input('shoppingCart') shoppingCart;
  @Input('small') small;
  

  constructor(private cartService:ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
  
}
