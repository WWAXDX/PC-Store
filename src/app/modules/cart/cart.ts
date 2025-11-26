import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart {

  items: any[] = [];

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.items = this.cart.getCartItems();
  }

  remove(index: number) {
    this.cart.removeItem(index);
    this.items = this.cart.getCartItems();
  }

  clear() {
    this.cart.clearCart();
    this.items = [];
  }

  getTotal() {
    return this.cart.getTotal();
  }
}
