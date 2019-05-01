import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  order$:Observable<any>;
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.order$=this.orderService.getOrders();
  }

}
