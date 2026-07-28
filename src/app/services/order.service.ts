import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Order, OrderItem } from '../models/order.model';
import { AuthService } from './auth.service';
import { PromoService } from './promo.service';

interface BackendOrderItem {
  id: number;
  productId: number;
  productName: string;
  productImage?: string;
  price: number;
  quantity: number;
}

interface BackendOrder {
  id: number;
  subtotal: number;
  shipping: number;
  discount?: number;
  total: number;
  status: string;
  shippingFullName: string;
  shippingCity: string;
  paymentMethod: string;
  promoCode?: string | null;
  createdAt: string;
  items: BackendOrderItem[];
  user?: { fullName?: string; email?: string };
}

const STORAGE_KEY = 'orders';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private promoService = inject(PromoService);
  private apiUrl = `${environment.apiUrl}/orders`;

  orders = signal<Order[]>([]);

  constructor() {
    effect(() => {
      this.authService.isLoggedIn();
      this.loadOrders();
    });
  }

  private loadOrders() {
    if (this.authService.isLoggedIn()) {
      this.http.get<BackendOrder[]>(this.apiUrl).pipe(
        map(orders => orders.map(o => this.mapBackendOrder(o))),
        catchError(() => of([] as Order[]))
      ).subscribe(orders => this.orders.set(orders));
    } else {
      this.loadLocalOrders();
    }
  }

  private loadLocalOrders() {
    if (!isPlatformBrowser(this.platformId)) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      this.orders.set([]);
      return;
    }
    try {
      const parsed = JSON.parse(saved) as Order[];
      this.orders.set(parsed.map(o => ({ ...o, discount: o.discount ?? 0 })));
    } catch {
      this.orders.set([]);
    }
  }

  private saveLocalOrders() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.orders()));
    }
  }

  private mapBackendOrder(o: BackendOrder): Order {
    return {
      id: 'ORD-' + o.id,
      items: o.items.map(i => ({
        product: { id: i.productId, name: i.productName, price: i.price, image: i.productImage },
        quantity: i.quantity
      })),
      total: o.total,
      subtotal: o.subtotal,
      shipping: o.shipping,
      discount: o.discount ?? 0,
      date: o.createdAt,
      status: o.status as Order['status'],
      shippingInfo: { fullName: o.shippingFullName, city: o.shippingCity },
      paymentMethod: o.paymentMethod,
      promoCode: o.promoCode,
      customerName: o.user?.fullName,
      customerEmail: o.user?.email
    };
  }

  /** Numeric id for API status updates (strips ORD- prefix). */
  toApiId(orderId: string): number | null {
    const raw = orderId.replace(/^ORD-/i, '');
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<BackendOrder[]>(`${this.apiUrl}/all`).pipe(
      map(orders => orders.map(o => this.mapBackendOrder(o))),
      catchError(err => throwError(() => err))
    );
  }

  updateStatus(orderId: string, status: Order['status']): Observable<void> {
    const id = this.toApiId(orderId);
    if (id == null) return throwError(() => new Error('Invalid order id'));
    return this.http.put<void>(`${this.apiUrl}/${id}/status`, { status });
  }

  placeOrder(
    items: OrderItem[],
    shippingInfo: { fullName: string; city: string },
    paymentMethod: string,
    promoCode?: string | null
  ): Observable<Order> {
    if (this.authService.isLoggedIn()) {
      const body = {
        items: items.map(i => ({ productId: i.product.id, quantity: i.quantity })),
        shippingFullName: shippingInfo.fullName,
        shippingCity: shippingInfo.city,
        paymentMethod,
        promoCode: promoCode || null
      };

      return this.http.post<BackendOrder>(this.apiUrl, body).pipe(
        map(o => this.mapBackendOrder(o)),
        tap(order => this.orders.update(orders => [order, ...orders]))
      );
    }

    const order = this.buildLocalOrder(items, shippingInfo, paymentMethod, promoCode);
    this.orders.update(orders => [order, ...orders]);
    this.saveLocalOrders();
    return of(order);
  }

  private buildLocalOrder(
    items: OrderItem[],
    shippingInfo: { fullName: string; city: string },
    paymentMethod: string,
    promoCode?: string | null
  ): Order {
    const subtotal = items.reduce((sum, i) => {
      const price = i.product.onSale && i.product.salePrice ? i.product.salePrice : i.product.price;
      return sum + price * i.quantity;
    }, 0);
    const promo = this.promoService.apply(promoCode, subtotal);
    const discount = promo?.discount ?? 0;
    const shipping = subtotal >= 500 ? 0 : 25;

    return {
      id: this.generateId(),
      items: items.map(i => ({ product: { ...i.product }, quantity: i.quantity })),
      total: Math.max(0, subtotal - discount) + shipping,
      subtotal,
      shipping,
      discount,
      date: new Date().toISOString(),
      status: 'pending',
      shippingInfo,
      paymentMethod,
      promoCode: promo?.code ?? null
    };
  }

  private generateId(): string {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
  }
}
