import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.html',
  styleUrl: './../content-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Shipping implements OnInit {
  private lang = inject(LanguageService);
  private seo = inject(SeoService);
  t = (k: string) => this.lang.t(k);
  ngOnInit() { this.seo.setPage('Shipping Policy', 'Shipping information for PC Parts Store.'); }
}
