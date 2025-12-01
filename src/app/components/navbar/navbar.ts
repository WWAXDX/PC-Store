import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit, OnDestroy {
  cartCount = 0;
  searchText: string = '';
  showMobileSidebar: boolean = false;
  activeDropdown: string | null = null;
  expandedSidebarCategory: string | null = null;
  currentLanguage: string = 'en';
  isScrolled: boolean = false;
  private hideTimer: any = null;
  private sub: Subscription | null = null;

  categories = [
    {
      key: 'pc-parts',
      name: 'PC Parts',
      route: '/products',
      queryParam: 'pc-parts',
      items: ['Graphics Cards (GPU)', 'Processors (CPU)', 'Memory (RAM)', 'Storage (SSD/HDD)', 'Motherboards', 'Power Supplies', 'Cases', 'CPU Coolers']
    },
    {
      key: 'monitors',
      name: 'Monitors',
      route: '/products',
      queryParam: 'monitors',
      items: ['Gaming Monitors', '4K Monitors', 'Ultrawide Monitors', 'Professional Monitors']
    },
    {
      key: 'chairs',
      name: 'Chairs',
      route: '/products',
      queryParam: 'chairs',
      items: ['Gaming Chairs', 'Office Chairs', 'Ergonomic Chairs']
    },
    {
      key: 'accessories',
      name: 'Accessories',
      route: '/products',
      queryParam: 'accessories',
      items: ['Keyboards', 'Mice', 'Headsets', 'Speakers', 'Webcams', 'Cables', 'Adapters', 'USB Hubs', 'Cleaning Kits', 'Thermal Paste']
    }
  ];

  constructor(private cart: CartService, private router: Router) {
    // subscribe to cart observable (reactive)
    this.sub = this.cart.items$.subscribe(items => {
      this.cartCount = items.length;
    });
  }

  ngOnInit() {
    // Check initial scroll position
    this.checkScrollPosition();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.cancelHideTimer();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    // Here you would implement actual language switching logic
    console.log('Language switched to:', this.currentLanguage);
  }

  toggleMobileMenu() {
    this.showMobileSidebar = !this.showMobileSidebar;
    if (this.showMobileSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu() {
    this.showMobileSidebar = false;
    document.body.style.overflow = 'auto';
    this.expandedSidebarCategory = null;
  }

  showDropdown(categoryKey: string) {
    this.cancelHideTimer();
    this.activeDropdown = categoryKey;
  }

  navigateToCategory(category: any, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.hideDropdownNow();
    this.router.navigate([category.route], { queryParams: { category: category.queryParam } });
  }

  startHideTimer() {
    this.hideTimer = setTimeout(() => {
      this.activeDropdown = null;
    }, 300);
  }

  cancelHideTimer() {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }

  hideDropdownNow() {
    this.cancelHideTimer();
    this.activeDropdown = null;
  }

  toggleSidebarCategory(categoryKey: string) {
    this.expandedSidebarCategory = this.expandedSidebarCategory === categoryKey ? null : categoryKey;
  }

  onSearch() {
    if (!this.searchText.trim()) return;
    this.router.navigate(['/products'], { queryParams: { search: this.searchText } });
    this.searchText = "";
  }

  onSearchMobile() {
    if (!this.searchText.trim()) return;
    this.router.navigate(['/products'], { queryParams: { search: this.searchText } });
    this.searchText = "";
    this.closeMobileMenu();
  }
}
