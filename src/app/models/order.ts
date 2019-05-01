import { shoppingCart } from './shopping-cart';

export class Order{
    datePlaced:number;
    items:any[];

    constructor(public userId:string, shoppingCart:shoppingCart,public shipping:any){
        this.datePlaced=new Date().getTime();
        this.items=shoppingCart.items.map(i=>{
            return {
              product:{
                title:i.title,
                imageUrl:i.imageUrl,
                price:i.price
              },
              quantity:i.quantity,
              totalPrice:i.totalPrice
            }
          })
    }
}