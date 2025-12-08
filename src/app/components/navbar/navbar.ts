import { Component, OnDestroy, OnInit, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { LanguageService } from '../../services/language.service';

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
  isScrolled: boolean = false;
  cartBounce: boolean = false;
  private hideTimer: any = null;
  private sub: Subscription | null = null;

  currentLanguage = computed(() => this.langService.currentLanguage());
  t = (key: string) => this.langService.t(key);

  categories = computed(() => [
    {
      key: 'pc-parts',
      name: this.t('nav.pcParts'),
      icon: 'bi-pc-display',
      color: '#009ffd',
      route: '/products',
      queryParam: 'pc-parts',
      items: [
        { key: 'Graphics Cards (GPU)', label: this.t('category.graphicsCards'), icon: 'bi-gpu-card' },
        { key: 'Processors (CPU)', label: this.t('category.processors'), icon: 'bi-cpu' },
        { key: 'Memory (RAM)', label: this.t('category.memory'), icon: 'bi-memory' },
        { key: 'Storage (SSD/HDD)', label: this.t('category.storage'), icon: 'bi-device-hdd' },
        { key: 'Motherboards', label: this.t('category.motherboards'), icon: 'bi-motherboard' },
        { key: 'Power Supplies', label: this.t('category.powerSupplies'), icon: 'bi-lightning-charge' },
        { key: 'Cases', label: this.t('category.cases'), icon: 'bi-box-seam' },
        { key: 'CPU Coolers', label: this.t('category.cpuCoolers'), icon: 'bi-snow2' }
      ]
    },
    {
      key: 'monitors',
      name: this.t('nav.monitors'),
      icon: 'bi-display',
      color: '#5f27cd',
      route: '/products',
      queryParam: 'monitors',
      items: [
        { key: 'Gaming Monitors', label: this.t('category.gamingMonitors'), icon: 'bi-joystick' },
        { key: '4K Monitors', label: this.t('category.4kMonitors'), icon: 'bi-badge-4k' },
        { key: 'Ultrawide Monitors', label: this.t('category.ultrawideMonitors'), icon: 'bi-arrow-left-right' },
        { key: 'Professional Monitors', label: this.t('category.professionalMonitors'), icon: 'bi-briefcase' }
      ]
    },
    {
      key: 'chairs',
      name: this.t('nav.chairs'),
      icon: 'bi-box',
      color: '#00d2d3',
      route: '/products',
      queryParam: 'chairs',
      items: [
        { key: 'Gaming Chairs', label: this.t('category.gamingChairs'), icon: 'bi-controller' },
        { key: 'Office Chairs', label: this.t('category.officeChairs'), icon: 'bi-building' },
        { key: 'Ergonomic Chairs', label: this.t('category.ergonomicChairs'), icon: 'bi-person-check' }
      ]
    },
    {
      key: 'accessories',
      name: this.t('nav.accessories'),
      icon: 'bi-keyboard',
      color: '#ff6b6b',
      route: '/products',
      queryParam: 'accessories',
      items: [
        { key: 'Keyboards', label: this.t('category.keyboards'), icon: 'bi-keyboard' },
        { key: 'Mice', label: this.t('category.mice'), icon: 'bi-mouse' },
        { key: 'Headsets', label: this.t('category.headsets'), icon: 'bi-headphones' },
        { key: 'Speakers', label: this.t('category.speakers'), icon: 'bi-speaker' },
        { key: 'Webcams', label: this.t('category.webcams'), icon: 'bi-camera-video' },
        { key: 'Cables', label: this.t('category.cables'), icon: 'bi-plug' },
        { key: 'Adapters', label: this.t('category.adapters'), icon: 'bi-usb-symbol' },
        { key: 'USB Hubs', label: this.t('category.usbHubs'), icon: 'bi-hdd-network' },
        { key: 'Cleaning Kits', label: this.t('category.cleaningKits'), icon: 'bi-droplet' },
        { key: 'Thermal Paste', label: this.t('category.thermalPaste'), icon: 'bi-thermometer-half' }
      ]
    }
  ]);

  constructor(
    private cart: CartService, 
    private router: Router,
    private langService: LanguageService
  ) {
    // subscribe to cart observable (reactive)
    this.sub = this.cart.items$.subscribe(items => {
      const newCount = items.reduce((sum, item) => sum + item.quantity, 0);
      if (newCount > this.cartCount) {
        this.triggerCartBounce();
      }
      this.cartCount = newCount;
    });
  }

  triggerCartBounce() {
    this.cartBounce = true;
    setTimeout(() => {
      this.cartBounce = false;
    }, 600);
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
    this.langService.toggleLanguage();
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
