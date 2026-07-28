import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './../content-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About implements OnInit {
  private lang = inject(LanguageService);
  private seo = inject(SeoService);
  t = (k: string) => this.lang.t(k);
  ngOnInit() { this.seo.setPage('About Us', 'Learn about PC Parts Store.'); }
}
