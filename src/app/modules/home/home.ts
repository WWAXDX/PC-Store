import { CommonModule } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy, inject, computed, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private productService = inject(ProductService);
  private langService = inject(LanguageService);
  featuredProducts = signal<Product[]>([]);

  // Exposes ProductService's error state so the template can show a real message
  // instead of silently rendering an empty "Featured Products" section.
  apiError = this.productService.apiError;

  t = (key: string) => this.langService.t(key);
  
  categories = computed(() => [
    { name: this.t('home.categoryGraphics'), icon: 'bi-gpu-card', subCategory: 'Graphics Cards (GPU)', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000' },
    { name: this.t('home.categoryProcessors'), icon: 'bi-cpu', subCategory: 'Processors (CPU)', image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?q=80&w=1000' },
    { name: this.t('home.categoryMemory'), icon: 'bi-memory', subCategory: 'Memory (RAM)', image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1000' },
    { name: this.t('home.categoryStorage'), icon: 'bi-device-hdd', subCategory: 'Storage (SSD/HDD)', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1000' },
    { name: this.t('home.categoryMotherboards'), icon: 'bi-motherboard', subCategory: 'Motherboards', image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000' },
    { name: this.t('home.categoryKeyboards'), icon: 'bi-keyboard', subCategory: 'Keyboards', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000' }
  ]);
  
  features = computed(() => [
    { icon: '🚚', title: this.t('home.feature1Title'), description: this.t('home.feature1Desc') },
    { icon: '✅', title: this.t('home.feature2Title'), description: this.t('home.feature2Desc') },
    { icon: '💰', title: this.t('home.feature3Title'), description: this.t('home.feature3Desc') },
    { icon: '🛡️', title: this.t('home.feature4Title'), description: this.t('home.feature4Desc') }
  ]);

  constructor() {
    effect(() => {
      this.loadFeaturedProducts();
    });
  }

  loadFeaturedProducts() {
    this.productService.getAllProducts().subscribe((allProducts: Product[]) => {
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      this.featuredProducts.set(shuffled.slice(0, 8));
    });
  }
}
