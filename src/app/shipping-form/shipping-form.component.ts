import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../models/order';
import { shipping_form } from '../models/shipping';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {

  constructor(private orderService:OrderService,private authService:AuthService,private router:Router) { }
  @Input('cart') cart;
  shipping:shipping_form={
    'name':"",
    'addressLine1':" ",
    'addressLine2':"",
    'city':""
  }; 
  userId:string;
  userSubscription:Subscription;
  async ngOnInit(){
    this.userSubscription=this.authService.user$.subscribe(user=>{this.userId=user.uid});
  }

  placeOrder() {
    let order=new Order(this.userId,this.cart,this.shipping);
    let result=this.orderService.storeOrder(order);
    this.router.navigate(['/order-success',result.key]);

  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
