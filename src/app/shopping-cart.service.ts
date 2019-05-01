import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take, map } from 'rxjs/operators';
import { shoppingCart } from './models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  async getCart(){
    let cartId=await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+cartId).snapshotChanges().pipe(
      map((x:any)=>new shoppingCart(x.payload.val().items))
    );
  }


  async addToCart(product){
    this.updateCartQuantity(product, 1);
  }

  removeFromCart(product){
    this.updateCartQuantity(product, -1);
  }

  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object("/shopping-carts/"+cartId+"/items").remove();
  }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated:new Date().getTime()
    });
  }

 
  private async getOrCreateCartId(){
    let cartId=localStorage.getItem('cartId');
    if(!cartId){
      let result=await this.create();
      localStorage.setItem('cartId',result.key);
      return result.key;
    }
    return cartId;
  }

  private getItem(cartId:string,productId:string){
    return this.db.object('/shopping-carts/'+cartId+'/items/'+productId);
  }

  

  private async updateCartQuantity(product,change:number){
    let cartId=await this.getOrCreateCartId();
    let item$=this.getItem(cartId,product.key);
   
    item$.snapshotChanges().pipe(take(1)).subscribe((item:any)=>{

        if(item.payload.val()){
          let quantity=item.payload.val().quantity + change
          if(quantity==0){
            item$.remove();
          }
          else{
            item$.update({
              quantity:quantity
            })
          }
        }
      
        else{
          item$.update({
            title:product.payload.val().title,
            price:product.payload.val().price,
            category:product.payload.val().category,
            imageUrl:product.payload.val().imageUrl,
            quantity:1
          })
        }
    });
  }
}
