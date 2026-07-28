import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './../content-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Faq implements OnInit {
  private lang = inject(LanguageService);
  private seo = inject(SeoService);
  t = (k: string) => this.lang.t(k);
  open = signal<number | null>(0);
  items = [1, 2, 3, 4, 5, 6];

  ngOnInit() { this.seo.setPage('FAQ', 'Frequently asked questions.'); }

  toggle(i: number) {
    this.open.set(this.open() === i ? null : i);
  }
}
