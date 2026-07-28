import { CommonModule } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy, inject, computed, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { CartService } from '../../services/cart.service';

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
  private seo = inject(SeoService);
  private cart = inject(CartService);

  featuredProducts = signal<Product[]>([]);
  loading = signal(true);
  skeletonItems = Array.from({ length: 10 }, (_, i) => i);
  apiError = this.productService.apiError;

  t = (key: string) => this.langService.t(key);

  categories = computed(() => [
    { name: this.t('home.categoryGraphics'), icon: 'bi-gpu-card', subCategory: 'Graphics Cards (GPU)', image: 'images/cat-gpu.jpg' },
    { name: this.t('home.categoryProcessors'), icon: 'bi-cpu', subCategory: 'Processors (CPU)', image: 'images/cat-cpu.jpg' },
    { name: this.t('home.categoryMemory'), icon: 'bi-memory', subCategory: 'Memory (RAM)', image: 'images/cat-ram.jpg' },
    { name: this.t('home.categoryStorage'), icon: 'bi-device-hdd', subCategory: 'Storage (SSD/HDD)', image: 'images/cat-storage.jpg' },
    { name: this.t('home.categoryMotherboards'), icon: 'bi-motherboard', subCategory: 'Motherboards', image: 'images/cat-motherboard.jpg' },
    { name: this.t('home.categoryKeyboards'), icon: 'bi-keyboard', subCategory: 'Keyboards', image: 'images/cat-keyboard.jpg' }
  ]);

  features = computed(() => [
    { icon: 'bi-truck', title: this.t('home.feature1Title'), description: this.t('home.feature1Desc') },
    { icon: 'bi-headset', title: this.t('home.feature2Title'), description: this.t('home.feature2Desc') },
    { icon: 'bi-shield-lock', title: this.t('home.feature3Title'), description: this.t('home.feature3Desc') },
    { icon: 'bi-award', title: this.t('home.feature4Title'), description: this.t('home.feature4Desc') }
  ]);

  constructor() {
    this.seo.setPage(
      'Home',
      'Shop graphics cards, processors, memory, monitors, gaming chairs and accessories. Quality PC components at competitive prices with fast delivery.'
    );

    effect(() => {
      this.loadFeaturedProducts();
    });
  }

  loadFeaturedProducts() {
    this.loading.set(true);
    this.productService.getAllProducts().subscribe((allProducts: Product[]) => {
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      this.featuredProducts.set(shuffled.slice(0, 10));
      this.loading.set(false);
    });
  }

  add(product: Product) {
    if ((product.stock ?? 1) <= 0) return;
    this.cart.addToCart(product);
  }
}
