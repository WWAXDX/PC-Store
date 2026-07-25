import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, RouterModule],
  templateUrl: './orders.html',
  styleUrls: ['./orders.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Orders {
  private orderService = inject(OrderService);
  private langService = inject(LanguageService);

  orders = this.orderService.orders;
  t = (key: string) => this.langService.t(key);

  getStatusIcon(status: string): string {
    switch (status) {
      case 'pending': return 'bi-clock';
      case 'processing': return 'bi-gear';
      case 'shipped': return 'bi-truck';
      case 'delivered': return 'bi-check-circle';
      default: return 'bi-clock';
    }
  }

  getItemPrice(item: { product: { onSale?: boolean; salePrice?: number; price: number }; quantity: number }): number {
    const price = item.product.onSale && item.product.salePrice ? item.product.salePrice : item.product.price;
    return price * item.quantity;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.langService.currentLanguage() === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
