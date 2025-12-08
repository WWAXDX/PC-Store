import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products implements OnInit {
  displayedProducts: Product[] = [];
  selectedCategory: string | null = null;
  selectedSubCategory: string | null = null;
  searchTerm: string | null = null;
  groupedProducts: { [key: string]: Product[] } = {};
  sortBy: string = 'default';
  
  private langService = inject(LanguageService);
  t = (key: string) => this.langService.t(key);

  constructor(
    private cart: CartService, 
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || null;
      this.searchTerm = params['search'] ? (params['search'] as string).trim() : null;
      this.filterProducts();
    });
  }

  filterProducts() {
    // start from category-filtered list
    let list = this.productService.filterProducts(this.selectedCategory);

    // apply search term filtering (if present)
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      list = list.filter(p => {
        const inName = p.name?.toLowerCase().includes(term);
        const inDesc = p.desc?.toLowerCase().includes(term);
        const inLong = p.description?.toLowerCase().includes(term);
        const inFeatures = (p.features || []).join(' ').toLowerCase().includes(term);
        return !!(inName || inDesc || inLong || inFeatures);
      });
    }

    this.displayedProducts = list;
    this.applySorting();
    this.groupBySubCategory();
  }

  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.sortBy = selectElement.value;
    this.applySorting();
    this.groupBySubCategory();
  }

  applySorting() {
    switch(this.sortBy) {
      case 'price-asc':
        this.displayedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.displayedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        this.displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        this.displayedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Keep default order
        break;
    }
  }

  groupBySubCategory() {
    this.groupedProducts = this.productService.groupBySubCategory(this.displayedProducts);
  }

  getSubCategories(): string[] {
    return Object.keys(this.groupedProducts);
  }

  getTotalProductCount(): number {
    return this.displayedProducts.length;
  }

  getCategoryName(): string {
    if (!this.selectedCategory) return '';
    
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

    const key = categoryMap[this.selectedCategory];
    return key ? this.t(key) : this.selectedCategory;
  }

  add(product: Product) {
    console.log('ProductsComponent: add clicked', product);
    this.cart.addToCart(product);
  }
}
