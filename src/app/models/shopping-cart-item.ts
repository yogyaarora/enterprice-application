export class shoppingCartItem{

    title:string;
    price:number;
    imageUrl:string;
    key:string;
    quantity:number;

    constructor(init?:Partial<shoppingCartItem>){
        Object.assign(this,init);
    }

    get totalPrice(){
        return this.price*this.quantity;
    }
}