import { Component, inject, ChangeDetectionStrategy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetails {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cart = inject(CartService);
  private productService = inject(ProductService);
  private langService = inject(LanguageService);

  product = signal<Product | null>(null);
  
  t = (key: string) => this.langService.t(key);

  constructor() {
    effect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.productService.getProductById(+id).subscribe({
          next: (product) => {
            if (!product) {
              this.product.set(null);
              this.router.navigate(['/products']);
              return;
            }
            this.product.set(product);
          },
          error: () => {
            this.product.set(null);
            this.router.navigate(['/products']);
          }
        });
      }
    });
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }
}
 
