import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // '' just redirectTo's 'home' client-side - prerendering it produces a meta-refresh
  // stub page instead of the real app shell, which breaks the GitHub Pages SPA-fallback
  // redirect trick (see public/404.html). Keeping it Client-rendered avoids that.
  { path: '', renderMode: RenderMode.Client },

  // Product ids come from the API and can change/grow after this site is built, so these
  // routes are rendered client-side rather than guessed at build time.
  { path: 'product/:id', renderMode: RenderMode.Client },
  { path: 'admin/products/:id/edit', renderMode: RenderMode.Client },
  { path: 'order-success', renderMode: RenderMode.Client },
  { path: 'account', renderMode: RenderMode.Client },
  { path: 'admin/orders', renderMode: RenderMode.Client },
  { path: 'checkout', renderMode: RenderMode.Client },

  // Everything else (home, products list, cart, checkout, orders, login, wishlist, admin
  // list, 404) has no unpredictable route params, so it can be prerendered as static HTML
  // for fast loads and SEO - this works great on static hosts like GitHub Pages.
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
