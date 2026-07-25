import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';

export type Language = 'ar' | 'en';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = signal<Language>('en');

  // Translation dictionaries live in ../i18n/en.json and ../i18n/ar.json
  private translations: Record<Language, Translations> = { en, ar };

  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
        this.currentLanguage.set(savedLang);
        this.updateDocumentDirection(savedLang);
      }
    }
  }

  toggleLanguage() {
    const newLang: Language = this.currentLanguage() === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
      this.updateDocumentDirection(lang);
    }
  }

  private updateDocumentDirection(lang: Language) {
    if (!isPlatformBrowser(this.platformId)) return;
    const htmlElement = document.documentElement;
    if (lang === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  }

  translate(key: string): string {
    const currentLang = this.currentLanguage();
    return this.translations[currentLang][key] || key;
  }

  t(key: string): string {
    return this.translate(key);
  }
}
