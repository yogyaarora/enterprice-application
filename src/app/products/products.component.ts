import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { shoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:any[];
  filteredProducts:any[];
  category:string;
  cart$:Observable<shoppingCart>;
  subscription:Subscription;
  innerWidth:number;
  small:boolean;
  coll:boolean;

  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
    private cartService:ShoppingCartService){
      this.innerWidth = window.innerWidth;
    if(this.innerWidth<500){
      this.small=true;
    }
    }

  async ngOnInit() {
    this.cart$=await this.cartService.getCart();
    this.populateProducts();
  }

  private populateProducts(){
    this.productService
      .getAll().pipe(
        switchMap(products=>{
          this.products=products;
          return this.route.queryParamMap}
        ))
      .subscribe(params=>{
        this.category=params.get('category');
        this.applyFilter();
      })
  }

  private applyFilter(){
    this.filteredProducts=(this.category)?
    this.products.filter(p=>this.category==p.payload.val().category):
    this.products;
  }
}
