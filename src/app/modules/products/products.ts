import { Component, inject, ChangeDetectionStrategy, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LanguageService } from '../../services/language.service';

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

  displayedProducts = signal<Product[]>([]);
  selectedCategory = signal<string | null>(null);
  selectedSubCategory = signal<string | null>(null);
  searchTerm = signal<string | null>(null);
  groupedProducts = signal<{ [key: string]: Product[] }>({});
  sortBy = signal('default');

  // Exposes ProductService's error state so the template can show a real message
  // instead of silently rendering an empty product list.
  apiError = this.productService.apiError;

  t = (key: string) => this.langService.t(key);

  constructor() {
    effect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

    this.productService.filterProducts(category).subscribe((products: Product[]) => {
      let filtered = products;

      // apply search term filtering (if present)
      if (search) {
        const term = search.toLowerCase();
        filtered = filtered.filter(p => {
          const inName = p.name?.toLowerCase().includes(term);
          const inDesc = p.desc?.toLowerCase().includes(term);
          const inLong = p.description?.toLowerCase().includes(term);
          const inFeatures = (p.features || []).join(' ').toLowerCase().includes(term);
          return !!(inName || inDesc || inLong || inFeatures);
        });
      }

      this.displayedProducts.set(filtered);
      this.applySorting();
      this.groupBySubCategory();
    });
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
    this.cart.addToCart(product);
  }
}
