import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products implements OnInit {
  displayedProducts: Product[] = [];
  selectedCategory: string | null = null;
  selectedSubCategory: string | null = null;
  groupedProducts: { [key: string]: Product[] } = {};

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
    this.groupBySubCategory();
  }

  groupBySubCategory() {
    this.groupedProducts = this.productService.groupBySubCategory(this.displayedProducts);
  }

  getSubCategories(): string[] {
    return Object.keys(this.groupedProducts);
  }

  add(product: Product) {
    console.log('ProductsComponent: add clicked', product);
    this.cart.addToCart(product);
  }
}
