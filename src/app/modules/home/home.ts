import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home implements OnInit {
  private productService = inject(ProductService);
  featuredProducts = signal<Product[]>([]);
  
  categories = [
    { name: 'Graphics Cards', icon: '🎮', subCategory: 'Graphics Cards (GPU)' },
    { name: 'Processors', icon: '⚡', subCategory: 'Processors (CPU)' },
    { name: 'Memory', icon: '💾', subCategory: 'Memory (RAM)' },
    { name: 'Storage', icon: '💿', subCategory: 'Storage (SSD/HDD)' },
    { name: 'Motherboards', icon: '🖥️', subCategory: 'Motherboards' },
    { name: 'Keyboards', icon: '⌨️', subCategory: 'Keyboards' }
  ];
  
  features = [
    { icon: '🚚', title: 'Fast Shipping', description: 'Free delivery on orders over $100' },
    { icon: '✅', title: 'Quality Products', description: 'Only authentic and tested parts' },
    { icon: '💰', title: 'Best Prices', description: 'Competitive pricing guaranteed' },
    { icon: '🛡️', title: 'Warranty', description: 'Full manufacturer warranty' }
  ];

  ngOnInit() {
    const allProducts = this.productService.getAllProducts();
    // Get 6 random featured products
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    this.featuredProducts.set(shuffled.slice(0, 6));
  }
}
