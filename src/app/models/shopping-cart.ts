import { shoppingCartItem } from './shopping-cart-item';

export class shoppingCart{

    items:shoppingCartItem[]=[];
    constructor(private itemsMap){
        this.itemsMap=itemsMap||{};
        for(let productId in itemsMap){
            let item=itemsMap[productId];
            this.items.push(new shoppingCartItem({ ...item, key:productId}));
        }
    }

    get totalPrice(){
        let sum=0;
        for(let id in this.items){
            sum +=this.items[id].totalPrice;
        }
        return sum;
    }

    get totalItemsCount(){
        let shoppingCartItemCount=0;
        for(let itemId in this.items)
        shoppingCartItemCount += this.items[itemId].quantity;
        return shoppingCartItemCount;
    }

    getQuantity(product){
        let item=this.itemsMap[product.key];
        return item ?item.quantity : 0;
    }

}