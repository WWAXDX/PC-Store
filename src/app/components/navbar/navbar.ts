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
        this.t('category.graphicsCards'),
        this.t('category.processors'),
        this.t('category.memory'),
        this.t('category.storage'),
        this.t('category.motherboards'),
        this.t('category.powerSupplies'),
        this.t('category.cases'),
        this.t('category.cpuCoolers')
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
        this.t('category.gamingMonitors'),
        this.t('category.4kMonitors'),
        this.t('category.ultrawideMonitors'),
        this.t('category.professionalMonitors')
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
        this.t('category.gamingChairs'),
        this.t('category.officeChairs'),
        this.t('category.ergonomicChairs')
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
        this.t('category.keyboards'),
        this.t('category.mice'),
        this.t('category.headsets'),
        this.t('category.speakers'),
        this.t('category.webcams'),
        this.t('category.cables'),
        this.t('category.adapters'),
        this.t('category.usbHubs'),
        this.t('category.cleaningKits'),
        this.t('category.thermalPaste')
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
