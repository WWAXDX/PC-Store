import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const SITE_NAME = 'PC Parts Store';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  // Sets the document title + meta description for the current page. Call this from a
  // page component's constructor/effect once its data (e.g. product name) is available.
  setPage(title: string, description: string) {
    const fullTitle = `${title} | ${SITE_NAME}`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
  }
}
