import { Injectable, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private meta = inject(Meta);

  theme = signal<Theme>('light');
  isDark = computed(() => this.theme() === 'dark');

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') {
      this.apply(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.apply('dark');
    } else {
      this.apply('light');
    }
  }

  toggle() {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme) {
    this.apply(theme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', theme);
    }
  }

  private apply(theme: Theme) {
    this.theme.set(theme);
    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.setAttribute('data-theme', theme);
    this.meta.updateTag({
      name: 'theme-color',
      content: theme === 'dark' ? '#0f1219' : '#1a2f55'
    });
  }
}
