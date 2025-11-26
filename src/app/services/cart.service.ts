import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  // BehaviorSubject holds current cart array and emits on change
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
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

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items.slice());
    console.log('CartService: cart cleared');
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price || 0), 0);
  }
}
