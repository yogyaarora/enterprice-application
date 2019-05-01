import { Component, OnInit} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItemsIds;
  cart$;

  constructor(private cartService:ShoppingCartService) {}

  async ngOnInit(){
    this.cart$=await this.cartService.getCart();
  }

  clearCart(){
    this.cartService.clearCart();
  }
 
}
