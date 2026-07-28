import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';
import { LanguageService } from '../../services/language.service';
import { Product } from '../../models/product.model';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-wishlist',
  imports: [CommonModule, RouterModule],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Wishlist {
  private wishlistService = inject(WishlistService);
  private cartService = inject(CartService);
  private langService = inject(LanguageService);
  private seo = inject(SeoService);

  products = this.wishlistService.products;
  t = (key: string) => this.langService.t(key);

  constructor() {
    this.seo.setPage('My Wishlist', 'View and manage your saved products at PC Parts Store.');
  }

  remove(product: Product) {
    this.wishlistService.remove(product.id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
