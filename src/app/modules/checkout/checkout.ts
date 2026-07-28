import { Component, OnInit, inject, signal, computed, ChangeDetectionStrategy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { PromoService } from '../../services/promo.service';

interface CartItem {
  product: { id: number; name: string; price: number; image?: string; onSale?: boolean; salePrice?: number; stock?: number };
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Checkout implements OnInit {
  private cartService = inject(CartService);
  private orderService = inject(OrderService);
  private langService = inject(LanguageService);
  private promoService = inject(PromoService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  cartItems = signal<CartItem[]>([]);
  placingOrder = signal(false);
  orderError = signal('');
  promoInput = signal('');
  appliedPromo = signal<string | null>(null);
  promoError = signal('');
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

  promoDiscount = computed(() => {
    const promo = this.promoService.apply(this.appliedPromo(), this.getSubtotal());
    return promo?.discount ?? 0;
  });

  ngOnInit() {
    this.seo.setPage('Checkout', 'Complete your purchase securely at PC Parts Store.');
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const saved = sessionStorage.getItem('promoCode');
      if (saved) this.appliedPromo.set(saved);
    }
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
    return this.getSubtotal() >= 500 ? 0 : 25;
  }

  getTotal(): number {
    return Math.max(0, this.getSubtotal() - this.promoDiscount()) + this.getShipping();
  }

  applyPromo() {
    const code = this.promoInput().trim();
    const result = this.promoService.apply(code, this.getSubtotal());
    if (!result) {
      this.promoError.set(this.t('checkout.promoInvalid'));
      this.appliedPromo.set(null);
      return;
    }
    this.promoError.set('');
    this.appliedPromo.set(result.code);
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('promoCode', result.code);
    }
  }

  clearPromo() {
    this.appliedPromo.set(null);
    this.promoInput.set('');
    this.promoError.set('');
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('promoCode');
    }
  }

  placeOrder() {
    this.shippingForm.markAllAsTouched();
    if (this.shippingForm.invalid) return;

    if (this.paymentMethod() === 'card') {
      this.cardForm.markAllAsTouched();
      if (this.cardForm.invalid) return;
    }

    const shipping = this.shippingForm.value;
    this.orderError.set('');
    this.placingOrder.set(true);

    // Simulate brief "payment processing" for card before creating the order
    const delay = this.paymentMethod() === 'card' ? 900 : 200;

    setTimeout(() => {
      this.orderService.placeOrder(
        this.cartItems(),
        { fullName: shipping.fullName, city: shipping.city },
        this.paymentMethod(),
        this.appliedPromo()
      ).subscribe({
        next: (order) => {
          this.placingOrder.set(false);
          this.cartService.clearCart();
          this.clearPromo();
          this.router.navigate(['/order-success'], { state: { order } });
        },
        error: (err) => {
          this.placingOrder.set(false);
          this.orderError.set(err?.error?.message || err?.message || this.t('common.loadError'));
        }
      });
    }, delay);
  }
}
