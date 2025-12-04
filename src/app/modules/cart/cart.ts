import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart implements OnDestroy {
  items: any[] = [];
  private sub: Subscription | null = null;

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

  clear() {
    this.cart.clearCart();
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getDiscount() {
    return this.items.reduce((sum, item) => {
      if (item.onSale && item.salePrice) {
        return sum + (item.price - item.salePrice);
      }
      return sum;
    }, 0);
  }

  getTotal() {
    return this.cart.getTotal();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
