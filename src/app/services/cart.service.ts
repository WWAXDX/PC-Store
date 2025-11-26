import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
    
export class CartService {

    private items: any[] = [];

    addToCart(product: any) {
        this.items.push(product);
    }

    getCartItems() {
        return this.items;
    }

    removeItem(index: number) {
        this.items.splice(index, 1);
    }

    clearCart() {
        this.items = [];
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}