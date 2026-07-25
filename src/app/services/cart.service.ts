import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private platformId = inject(PLATFORM_ID);
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  private items: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('cart');
      if (saved) {
        try {
          this.items = JSON.parse(saved);
          this.itemsSubject.next(this.items.slice());
        } catch {
          this.items = [];
        }
      }
    }
  }

  private saveCart() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    
    this.itemsSubject.next(this.items.slice());
    this.saveCart();
  }

  getCartItems(): CartItem[] {
    return this.items.slice();
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.itemsSubject.next(this.items.slice());
    this.saveCart();
  }

  updateQuantity(index: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(index);
    } else {
      this.items[index].quantity = quantity;
      this.itemsSubject.next(this.items.slice());
      this.saveCart();
    }
  }

  increaseQuantity(index: number) {
    this.items[index].quantity++;
    this.itemsSubject.next(this.items.slice());
    this.saveCart();
  }

  decreaseQuantity(index: number) {
    if (this.items[index].quantity > 1) {
      this.items[index].quantity--;
      this.itemsSubject.next(this.items.slice());
      this.saveCart();
    } else {
      this.removeItem(index);
    }
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items.slice());
    this.saveCart();
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
