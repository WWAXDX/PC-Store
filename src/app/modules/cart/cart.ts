import { Component, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { LanguageService } from '../../services/language.service';

interface CartItem {
  product: { id: number; name: string; price: number; image?: string; subCategory?: string; desc?: string; onSale?: boolean; salePrice?: number; discount?: number };
  quantity: number;
}

@Component({
  selector: 'app-cart',
  imports: [RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Cart implements OnInit, OnDestroy {
  private cart = inject(CartService);
  private langService = inject(LanguageService);

  items: CartItem[] = [];
  private sub: Subscription | null = null;
  
  t = (key: string) => this.langService.t(key);

  ngOnInit() {
    this.sub = this.cart.items$.subscribe(arr => {
      this.items = arr;
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
