import { Component, ChangeDetectionStrategy, inject, signal, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-success',
  imports: [RouterModule],
  templateUrl: './order-success.html',
  styleUrl: './order-success.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSuccess implements OnInit {
  private router = inject(Router);
  private lang = inject(LanguageService);
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  t = (k: string) => this.lang.t(k);
  order = signal<Order | null>(null);

  ngOnInit() {
    this.seo.setPage('Order Confirmed', 'Your order was placed successfully.');
    const nav = this.router.getCurrentNavigation();
    let stateOrder = nav?.extras?.state?.['order'] as Order | undefined;
    if (!stateOrder && isPlatformBrowser(this.platformId)) {
      stateOrder = (history.state?.['order'] as Order | undefined) ?? undefined;
    }
    this.order.set(stateOrder ?? null);
  }
}
