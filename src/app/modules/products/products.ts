import { Component, inject, ChangeDetectionStrategy, signal, effect, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LanguageService } from '../../services/language.service';
import { WishlistService } from '../../services/wishlist.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Products {
  private cart = inject(CartService);
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private langService = inject(LanguageService);
  private wishlistService = inject(WishlistService);
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  displayedProducts = signal<Product[]>([]);
  loading = signal(true);
  skeletonItems = Array.from({ length: 8 }, (_, i) => i);
  selectedCategory = signal<string | null>(null);
  selectedSubCategory = signal<string | null>(null);
  searchTerm = signal<string | null>(null);
  groupedProducts = signal<{ [key: string]: Product[] }>({});
  sortBy = signal('default');
  brands = signal<string[]>([]);
  selectedBrand = signal<string>('');
  minPrice = signal<number | null>(null);
  maxPrice = signal<number | null>(null);
  inStockOnly = signal(false);

  apiError = this.productService.apiError;

  t = (key: string) => this.langService.t(key);

  constructor() {
    this.productService.getBrands().subscribe(b => this.brands.set(b));

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      this.route.queryParams.subscribe(params => {
        this.selectedCategory.set(params['category'] || null);
        this.searchTerm.set(params['search'] ? (params['search'] as string).trim() : null);
        this.filterProducts();
      });
    });
  }

  filterProducts() {
    const category = this.selectedCategory();
    const search = this.searchTerm();

    this.updateSeo(category, search);

    this.loading.set(true);
    this.productService.getProducts(category, search, {
      brand: this.selectedBrand() || null,
      minPrice: this.minPrice(),
      maxPrice: this.maxPrice(),
      inStock: this.inStockOnly() || null
    }).subscribe((products: Product[]) => {
      this.displayedProducts.set(products);
      this.applySorting();
      this.groupBySubCategory();
      this.loading.set(false);
    });
  }

  applyFilters() {
    this.filterProducts();
  }

  clearFilters() {
    this.selectedBrand.set('');
    this.minPrice.set(null);
    this.maxPrice.set(null);
    this.inStockOnly.set(false);
    this.filterProducts();
  }

  private updateSeo(category: string | null, search: string | null) {
    if (search) {
      this.seo.setPage(`Search: ${search}`, `Search results for "${search}" at PC Parts Store.`);
    } else if (category) {
      const name = this.getCategoryName();
      this.seo.setPage(name, `Browse our ${name} selection at PC Parts Store.`);
    } else {
      this.seo.setPage('All Products', 'Browse our full catalog of PC parts, monitors, chairs and accessories.');
    }
  }

  retry() {
    this.filterProducts();
  }

  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.sortBy.set(selectElement.value);
    this.applySorting();
    this.groupBySubCategory();
  }

  applySorting() {
    const products = this.displayedProducts();
    const sort = this.sortBy();
    
    switch(sort) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Keep default order
        break;
    }
    this.displayedProducts.set(products);
  }

  groupBySubCategory() {
    this.groupedProducts.set(this.productService.groupBySubCategory(this.displayedProducts()));
  }

  getSubCategories(): string[] {
    return Object.keys(this.groupedProducts());
  }

  translateSubCategory(subCategory: string): string {
    const categoryMap: { [key: string]: string } = {
      'Graphics Cards (GPU)': 'category.graphicsCards',
      'Processors (CPU)': 'category.processors',
      'Memory (RAM)': 'category.memory',
      'Storage (SSD/HDD)': 'category.storage',
      'Motherboards': 'category.motherboards',
      'Power Supplies': 'category.powerSupplies',
      'Cases': 'category.cases',
      'CPU Coolers': 'category.cpuCoolers',
      'Gaming Monitors': 'category.gamingMonitors',
      '4K Monitors': 'category.4kMonitors',
      'Ultrawide Monitors': 'category.ultrawideMonitors',
      'Professional Monitors': 'category.professionalMonitors',
      'Gaming Chairs': 'category.gamingChairs',
      'Office Chairs': 'category.officeChairs',
      'Ergonomic Chairs': 'category.ergonomicChairs',
      'Keyboards': 'category.keyboards',
      'Mice': 'category.mice',
      'Headsets': 'category.headsets',
      'Speakers': 'category.speakers',
      'Webcams': 'category.webcams',
      'Cables': 'category.cables',
      'Adapters': 'category.adapters',
      'USB Hubs': 'category.usbHubs',
      'Cleaning Kits': 'category.cleaningKits',
      'Thermal Paste': 'category.thermalPaste'
    };

    const key = categoryMap[subCategory];
    return key ? this.t(key) : subCategory;
  }

  getTotalProductCount(): number {
    return this.displayedProducts().length;
  }

  getCategoryName(): string {
    const category = this.selectedCategory();
    if (!category) return '';
    
    // Map category names to translation keys
    const categoryMap: { [key: string]: string } = {
      'Graphics Cards (GPU)': 'category.graphicsCards',
      'Processors (CPU)': 'category.processors',
      'Memory (RAM)': 'category.memory',
      'Storage (SSD/HDD)': 'category.storage',
      'Motherboards': 'category.motherboards',
      'Power Supplies': 'category.powerSupplies',
      'Cases': 'category.cases',
      'CPU Coolers': 'category.cpuCoolers',
      'Gaming Monitors': 'category.gamingMonitors',
      '4K Monitors': 'category.4kMonitors',
      'Ultrawide Monitors': 'category.ultrawideMonitors',
      'Professional Monitors': 'category.professionalMonitors',
      'Gaming Chairs': 'category.gamingChairs',
      'Office Chairs': 'category.officeChairs',
      'Ergonomic Chairs': 'category.ergonomicChairs',
      'Keyboards': 'category.keyboards',
      'Mice': 'category.mice',
      'Headsets': 'category.headsets',
      'Speakers': 'category.speakers',
      'Webcams': 'category.webcams',
      'Cables': 'category.cables',
      'Adapters': 'category.adapters',
      'USB Hubs': 'category.usbHubs',
      'Cleaning Kits': 'category.cleaningKits',
      'Thermal Paste': 'category.thermalPaste'
    };

    const key = categoryMap[category];
    return key ? this.t(key) : category;
  }

  add(product: Product) {
    if ((product.stock ?? 1) <= 0) return;
    this.cart.addToCart(product);
  }

  stockLabel(product: Product): string {
    const stock = product.stock ?? 0;
    if (stock <= 0) return this.t('products.outOfStock');
    if (stock <= 5) return this.t('products.lowStock').replace('{n}', String(stock));
    return this.t('products.inStock').replace('{n}', String(stock));
  }

  isOutOfStock(product: Product): boolean {
    return (product.stock ?? 0) <= 0;
  }

  isInWishlist(product: Product): boolean {
    return this.wishlistService.isInWishlist(product.id);
  }

  toggleWishlist(product: Product, event: Event) {
    event.stopPropagation();
    this.wishlistService.toggle(product);
  }
}
