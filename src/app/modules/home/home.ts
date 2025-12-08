import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ChangeDetectionStrategy, inject, computed } from '@angular/core';
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
export class Home implements OnInit {
  private productService = inject(ProductService);
  private langService = inject(LanguageService);
  featuredProducts = signal<Product[]>([]);
  
  t = (key: string) => this.langService.t(key);
  
  categories = computed(() => [
    { name: this.t('home.categoryGraphics'), icon: '🎮', subCategory: this.t('category.graphicsCards') },
    { name: this.t('home.categoryProcessors'), icon: '⚡', subCategory: this.t('category.processors') },
    { name: this.t('home.categoryMemory'), icon: '💾', subCategory: this.t('category.memory') },
    { name: this.t('home.categoryStorage'), icon: '💿', subCategory: this.t('category.storage') },
    { name: this.t('home.categoryMotherboards'), icon: '🖥️', subCategory: this.t('category.motherboards') },
    { name: this.t('home.categoryKeyboards'), icon: '⌨️', subCategory: this.t('category.keyboards') }
  ]);
  
  features = computed(() => [
    { icon: '🚚', title: this.t('home.feature1Title'), description: this.t('home.feature1Desc') },
    { icon: '✅', title: this.t('home.feature2Title'), description: this.t('home.feature2Desc') },
    { icon: '💰', title: this.t('home.feature3Title'), description: this.t('home.feature3Desc') },
    { icon: '🛡️', title: this.t('home.feature4Title'), description: this.t('home.feature4Desc') }
  ]);

  ngOnInit() {
    const allProducts = this.productService.getAllProducts();
    // Get 6 random featured products
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    this.featuredProducts.set(shuffled.slice(0, 6));
  }
}
