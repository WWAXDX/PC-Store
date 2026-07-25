import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Order, OrderItem } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private platformId = inject(PLATFORM_ID);
  orders = signal<Order[]>([]);

  constructor() {
    this.loadOrders();
  }

  private loadOrders() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('orders');
      if (saved) {
        try {
          this.orders.set(JSON.parse(saved));
        } catch {
          this.orders.set([]);
        }
      }
    }
  }

  private saveOrders() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('orders', JSON.stringify(this.orders()));
    }
  }

  addOrder(items: OrderItem[], total: number, subtotal: number, shipping: number, shippingInfo: { fullName: string; city: string }, paymentMethod: string) {
    const order: Order = {
      id: this.generateId(),
      items: items.map(i => ({
        product: {
          id: i.product.id,
          name: i.product.name,
          price: i.product.price,
          image: i.product.image,
          onSale: i.product.onSale,
          salePrice: i.product.salePrice,
        },
        quantity: i.quantity
      })),
      total,
      subtotal,
      shipping,
      date: new Date().toISOString(),
      status: 'pending',
      shippingInfo,
      paymentMethod
    };

    this.orders.update(orders => [order, ...orders]);
    this.saveOrders();
    return order;
  }

  getOrders(): Order[] {
    return this.orders();
  }

  private generateId(): string {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
  }
}
