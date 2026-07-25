import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { LanguageService } from '../../services/language.service';

interface CartItem {
  product: { id: number; name: string; price: number; image?: string; onSale?: boolean; salePrice?: number };
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Checkout implements OnInit {
  private cartService = inject(CartService);
  private orderService = inject(OrderService);
  private langService = inject(LanguageService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  cartItems = signal<CartItem[]>([]);
  orderPlaced = signal(false);
  t = (key: string) => this.langService.t(key);

  shippingForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^05\d{8}$/)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    city: ['', Validators.required],
    postalCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
  });

  paymentMethod = signal<'card' | 'cod'>('card');

  cardForm: FormGroup = this.fb.group({
    cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
    cardName: ['', [Validators.required, Validators.minLength(3)]],
    expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
    cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
  });

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.cartItems.set(this.cartService.getCartItems());
    
    if (this.cartItems().length === 0) {
      this.router.navigate(['/cart']);
    }
  }

  setPaymentMethod(method: 'card' | 'cod') {
    this.paymentMethod.set(method);
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
    this.shippingForm.markAllAsTouched();
    if (this.shippingForm.invalid) return;

    if (this.paymentMethod() === 'card') {
      this.cardForm.markAllAsTouched();
      if (this.cardForm.invalid) return;
    }

    const shipping = this.shippingForm.value;
    const subtotal = this.getSubtotal();
    const shippingCost = this.getShipping();
    const total = this.getTotal();

    this.orderService.addOrder(
      this.cartItems(),
      total,
      subtotal,
      shippingCost,
      { fullName: shipping.fullName, city: shipping.city },
      this.paymentMethod()
    );

    this.cartService.clearCart();
    this.orderPlaced.set(true);
    setTimeout(() => this.router.navigate(['/orders']), 2000);
  }
}
