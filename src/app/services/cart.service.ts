import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  product: any;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  // BehaviorSubject holds current cart array and emits on change
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  private items: CartItem[] = [];

  addToCart(product: any) {
    // Check if product already exists in cart
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      // Increase quantity if product exists
      existingItem.quantity++;
    } else {
      // Add new product with quantity 1
      this.items.push({ product, quantity: 1 });
    }
    
    this.itemsSubject.next(this.items.slice()); // emit a copy
    console.log('CartService: item added', product);
  }

  getCartItems() {
    return this.items.slice(); // return copy
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.itemsSubject.next(this.items.slice());
    console.log('CartService: item removed index=', index);
  }

  updateQuantity(index: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(index);
    } else {
      this.items[index].quantity = quantity;
      this.itemsSubject.next(this.items.slice());
    }
  }

  increaseQuantity(index: number) {
    this.items[index].quantity++;
    this.itemsSubject.next(this.items.slice());
  }

  decreaseQuantity(index: number) {
    if (this.items[index].quantity > 1) {
      this.items[index].quantity--;
      this.itemsSubject.next(this.items.slice());
    } else {
      this.removeItem(index);
    }
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items.slice());
    console.log('CartService: cart cleared');
  }

  getTotal() {
    return this.items.reduce((sum, item) => {
      const price = item.product.onSale && item.product.salePrice 
        ? item.product.salePrice 
        : item.product.price;
      return sum + (price * item.quantity);
    }, 0);
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  getDiscount() {
    return this.items.reduce((sum, item) => {
      if (item.product.onSale && item.product.salePrice) {
        return sum + ((item.product.price - item.product.salePrice) * item.quantity);
      }
      return sum;
    }, 0);
  }

  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
