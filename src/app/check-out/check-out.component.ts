import { Component, OnInit} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { shoppingCart } from '../models/shopping-cart';
import {  Observable } from 'rxjs';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{

  constructor(private cartService:ShoppingCartService){}
  cart$:Observable<shoppingCart>;
  async ngOnInit(){
    this.cart$=await this.cartService.getCart();
  }

}
