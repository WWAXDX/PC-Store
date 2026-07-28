import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-admin-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-products.html',
  styleUrls: ['./admin-products.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminProducts {
  private productService = inject(ProductService);
  private langService = inject(LanguageService);

  products = signal<Product[]>([]);
  loading = signal(true);
  deletingId = signal<number | null>(null);
  errorMessage = signal('');

  t = (key: string) => this.langService.t(key);

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading.set(true);
    this.productService.getAllProducts().subscribe(products => {
      this.products.set(products);
      this.loading.set(false);
    });
  }

  deleteProduct(product: Product) {
    if (!confirm(this.t('admin.confirmDelete').replace('{name}', product.name))) return;

    this.deletingId.set(product.id);
    this.errorMessage.set('');

    this.productService.deleteProduct(product.id).subscribe({
      next: () => {
        this.products.update(list => list.filter(p => p.id !== product.id));
        this.deletingId.set(null);
      },
      error: () => {
        this.errorMessage.set(this.t('admin.deleteError'));
        this.deletingId.set(null);
      }
    });
  }
}
