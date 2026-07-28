import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { LanguageService } from '../../../services/language.service';
import { SeoService } from '../../../services/seo.service';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-admin-orders',
  imports: [RouterModule, DatePipe],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOrders implements OnInit {
  private ordersApi = inject(OrderService);
  private lang = inject(LanguageService);
  private seo = inject(SeoService);

  t = (k: string) => this.lang.t(k);
  orders = signal<Order[]>([]);
  loading = signal(true);
  error = signal(false);
  statuses: Order['status'][] = ['pending', 'processing', 'shipped', 'delivered'];

  ngOnInit() {
    this.seo.setPage('Admin Orders', 'Manage customer orders.');
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set(false);
    this.ordersApi.getAllOrders().subscribe({
      next: (list) => {
        this.orders.set(list);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  onStatusChange(order: Order, event: Event) {
    const status = (event.target as HTMLSelectElement).value as Order['status'];
    this.ordersApi.updateStatus(order.id, status).subscribe({
      next: () => {
        this.orders.update(list =>
          list.map(o => (o.id === order.id ? { ...o, status } : o))
        );
      },
      error: () => this.error.set(true)
    });
  }
}
