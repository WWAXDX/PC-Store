import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
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

  getTotal() {
    return this.cart.getTotal();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
