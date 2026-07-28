import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';

const STORAGE_KEY = 'wishlist';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private productService = inject(ProductService);
  private apiUrl = `${environment.apiUrl}/wishlist`;

  // Full product objects, used by the wishlist page.
  products = signal<Product[]>([]);

  // Just the ids, used to toggle heart icons quickly across the whole app.
  productIds = signal<Set<number>>(new Set());

  constructor() {
    effect(() => {
      this.authService.isLoggedIn();
      this.reload();
    });
  }

  private reload() {
    if (this.authService.isLoggedIn()) {
      this.http.get<Product[]>(this.apiUrl).pipe(
        catchError(() => of([] as Product[]))
      ).subscribe(products => {
        this.products.set(products);
        this.productIds.set(new Set(products.map(p => p.id)));
      });
    } else {
      this.loadLocal();
    }
  }

  private loadLocal() {
    if (!isPlatformBrowser(this.platformId)) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    let ids: number[] = [];
    if (saved) {
      try { ids = JSON.parse(saved); } catch { ids = []; }
    }
    this.productIds.set(new Set(ids));

    if (ids.length === 0) {
      this.products.set([]);
      return;
    }

    // Guests only store ids locally, so resolve them to full product objects here.
    this.productService.getAllProducts().subscribe(all => {
      this.products.set(all.filter(p => ids.includes(p.id)));
    });
  }

  private saveLocal() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(this.productIds())));
    }
  }

  isInWishlist(productId: number): boolean {
    return this.productIds().has(productId);
  }

  toggle(product: Product) {
    if (this.isInWishlist(product.id)) {
      this.remove(product.id);
    } else {
      this.add(product);
    }
  }

  add(product: Product) {
    this.productIds.update(ids => new Set(ids).add(product.id));
    this.products.update(list => list.some(p => p.id === product.id) ? list : [product, ...list]);

    if (this.authService.isLoggedIn()) {
      this.http.post(`${this.apiUrl}/${product.id}`, {}).subscribe();
    } else {
      this.saveLocal();
    }
  }

  remove(productId: number) {
    this.productIds.update(ids => {
      const next = new Set(ids);
      next.delete(productId);
      return next;
    });
    this.products.update(list => list.filter(p => p.id !== productId));

    if (this.authService.isLoggedIn()) {
      this.http.delete(`${this.apiUrl}/${productId}`).subscribe();
    } else {
      this.saveLocal();
    }
  }
}
