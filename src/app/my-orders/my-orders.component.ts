import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order$:Observable<any>;
  uid:string;
  constructor(private orderService:OrderService,private auth:AuthService) { 
    
  }

   ngOnInit() {
    this.auth.user$.subscribe(async user=>{
      this.uid=user.uid;
      this.order$=this.orderService.getOrdersByUsers(this.uid);
    })
    
  }

}
