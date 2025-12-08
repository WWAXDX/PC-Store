import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart implements OnDestroy {
  items: any[] = [];
  private sub: Subscription | null = null;
  private langService = inject(LanguageService);
  
  t = (key: string) => this.langService.t(key);

  constructor(private cart: CartService) {}

  ngOnInit() {
    // Subscribe to the cart observable so updates are reactive
    this.sub = this.cart.items$.subscribe(arr => {
      this.items = arr;
      console.log('CartComponent: items updated', this.items);
    });
  }

  remove(index: number) {
    this.cart.removeItem(index);
  }

  increaseQuantity(index: number) {
    this.cart.increaseQuantity(index);
  }

  decreaseQuantity(index: number) {
    this.cart.decreaseQuantity(index);
  }

  clear() {
    this.cart.clearCart();
  }

  getSubtotal() {
    return this.cart.getSubtotal();
  }

  getDiscount() {
    return this.cart.getDiscount();
  }

  getTotal() {
    return this.cart.getTotal();
  }

  getTotalItems() {
    return this.cart.getTotalItems();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
