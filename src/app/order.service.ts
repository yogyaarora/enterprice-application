import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private cartService:ShoppingCartService) { }
  
   storeOrder(order){

    let result= this.db.list('/orders').push(order);
    this.cartService.clearCart();
    return result;
  }
  getOrders(){
    return this.db.list('/orders').valueChanges();
  }
  getOrdersByUsers(userId:string){
    return this.db.list('/orders',ref=>ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }
}

