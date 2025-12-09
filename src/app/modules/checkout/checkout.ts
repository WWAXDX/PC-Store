import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { LanguageService } from '../../services/language.service';

interface CartItem {
  product: any;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss']
})
export class Checkout implements OnInit {
  private cartService = inject(CartService);
  private langService = inject(LanguageService);
  private router = inject(Router);

  cartItems = signal<CartItem[]>([]);
  t = (key: string) => this.langService.t(key);

  // Form data
  shippingInfo = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Saudi Arabia'
  };

  paymentMethod = 'card';
  cardInfo = {
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  };

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.cartItems.set(this.cartService.getCartItems());
    
    if (this.cartItems().length === 0) {
      this.router.navigate(['/cart']);
    }
  }

  getSubtotal(): number {
    return this.cartService.getTotal();
  }

  getShipping(): number {
    return this.getSubtotal() >= 500 ? 0 : 50;
  }

  getTotal(): number {
    return this.getSubtotal() + this.getShipping();
  }

  placeOrder() {
    // Validate form
    if (!this.validateForm()) {
      alert(this.t('checkout.fillAllFields'));
      return;
    }

    // Simulate order processing
    alert(this.t('checkout.orderSuccess'));
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  validateForm(): boolean {
    const { fullName, email, phone, address, city, postalCode } = this.shippingInfo;
    
    if (!fullName || !email || !phone || !address || !city || !postalCode) {
      return false;
    }

    if (this.paymentMethod === 'card') {
      const { cardNumber, cardName, expiryDate, cvv } = this.cardInfo;
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        return false;
      }
    }

    return true;
  }
}
