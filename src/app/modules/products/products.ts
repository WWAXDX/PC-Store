import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

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
  groupedProducts: { [key: string]: Product[] } = {};
  sortBy: string = 'default';

  constructor(
    private cart: CartService, 
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || null;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.displayedProducts = this.productService.filterProducts(this.selectedCategory);
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

  add(product: Product) {
    console.log('ProductsComponent: add clicked', product);
    this.cart.addToCart(product);
  }
}
