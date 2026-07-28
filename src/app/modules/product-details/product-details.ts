import { Component, inject, ChangeDetectionStrategy, signal, computed, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LanguageService } from '../../services/language.service';
import { WishlistService } from '../../services/wishlist.service';
import { AuthService } from '../../services/auth.service';
import { ReviewService, ReviewSummary } from '../../services/review.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule, FormsModule],
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
  private wishlistService = inject(WishlistService);
  private reviewService = inject(ReviewService);
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  authService = inject(AuthService);

  product = signal<Product | null>(null);
  relatedProducts = signal<Product[]>([]);

  reviewSummary = signal<ReviewSummary>({ averageRating: 0, count: 0, reviews: [] });
  reviewsLoading = signal(false);
  newRating = signal(5);
  newComment = signal('');
  submittingReview = signal(false);
  reviewError = signal('');

  t = (key: string) => this.langService.t(key);

  // Localized product content - shows Arabic text when the UI language is Arabic,
  // falling back to English if a product has no Arabic translation.
  private isArabic = computed(() => this.langService.currentLanguage() === 'ar');
  localizedDesc = computed(() => {
    const p = this.product();
    if (!p) return '';
    return this.isArabic() && p.descAr ? p.descAr : p.desc;
  });
  localizedDescription = computed(() => {
    const p = this.product();
    if (!p) return '';
    return (this.isArabic() && p.descriptionAr ? p.descriptionAr : p.description) ?? '';
  });
  localizedFeatures = computed(() => {
    const p = this.product();
    if (!p) return [] as string[];
    return this.isArabic() && p.featuresAr?.length ? p.featuresAr : (p.features ?? []);
  });

  constructor() {
    // Subscribe to paramMap (not a one-time snapshot) so navigating from one product
    // page to another (e.g. via the related-products section) reloads the data.
    this.route.paramMap.subscribe(params => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      const id = params.get('id');
      if (id) {
        this.productService.getProductById(+id).subscribe({
          next: (product) => {
            if (!product) {
              this.product.set(null);
              this.router.navigate(['/products']);
              return;
            }
            this.product.set(product);
            this.seo.setPage(product.name, product.desc);
            this.loadReviews(product.id);
            this.loadRelated(product);
          },
          error: () => {
            this.product.set(null);
            this.router.navigate(['/products']);
          }
        });
      }
    });
  }

  loadRelated(product: Product) {
    this.productService.getProducts(product.subCategory).subscribe((list: Product[]) => {
      this.relatedProducts.set(list.filter(p => p.id !== product.id).slice(0, 4));
    });
  }

  addToCart(product: Product) {
    if ((product.stock ?? 0) <= 0) return;
    this.cart.addToCart(product);
  }

  isOutOfStock = computed(() => (this.product()?.stock ?? 0) <= 0);
  isLowStock = computed(() => {
    const s = this.product()?.stock ?? 0;
    return s > 0 && s <= 5;
  });
  stockLabel = computed(() => {
    const s = this.product()?.stock ?? 0;
    if (s <= 0) return this.t('products.outOfStock');
    if (s <= 5) return this.t('products.lowStock').replace('{n}', String(s));
    return this.t('products.inStock').replace('{n}', String(s));
  });

  isInWishlist(product: Product): boolean {
    return this.wishlistService.isInWishlist(product.id);
  }

  toggleWishlist(product: Product) {
    this.wishlistService.toggle(product);
  }

  loadReviews(productId: number) {
    this.reviewsLoading.set(true);
    this.reviewService.getReviews(productId).subscribe({
      next: (summary) => {
        this.reviewSummary.set(summary);
        this.reviewsLoading.set(false);
      },
      error: () => this.reviewsLoading.set(false)
    });
  }

  hasReviewed(): boolean {
    const email = this.authService.currentUser()?.email;
    if (!email) return false;
    // Reviews only carry a display name, so we approximate "already reviewed" by name;
    // the backend still enforces the real one-review-per-user rule via user id.
    return this.reviewSummary().reviews.some(r => r.userName === this.authService.currentUser()?.fullName);
  }

  submitReview() {
    const product = this.product();
    if (!product) return;

    this.submittingReview.set(true);
    this.reviewError.set('');

    this.reviewService.addReview(product.id, this.newRating(), this.newComment().trim()).subscribe({
      next: () => {
        this.submittingReview.set(false);
        this.newComment.set('');
        this.newRating.set(5);
        this.loadReviews(product.id);
      },
      error: (err) => {
        this.submittingReview.set(false);
        this.reviewError.set(err?.error?.message || this.t('reviews.submitError'));
      }
    });
  }

  starsArray(rating: number): number[] {
    return [1, 2, 3, 4, 5].map(n => (n <= Math.round(rating) ? 1 : 0));
  }
}
