import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./modules/home/home').then(c => c.Home) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', loadComponent: () => import('./modules/products/products').then(c => c.Products) },
  { path: 'cart', loadComponent: () => import('./modules/cart/cart').then(c => c.Cart) },
  { path: 'product/:id', loadComponent: () => import('./modules/product-details/product-details').then(c => c.ProductDetails) },
  { path: 'login', loadComponent: () => import('./modules/login/login').then(c => c.Login) },
];
