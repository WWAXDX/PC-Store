import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./modules/home/home').then(c => c.Home) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'products', loadComponent: () => import('./modules/products/products').then(c => c.Products) },
  { path: 'cart', loadComponent: () => import('./modules/cart/cart').then(c => c.Cart) },
  { path: 'orders', loadComponent: () => import('./modules/orders/orders').then(c => c.Orders) },
  { path: 'checkout', loadComponent: () => import('./modules/checkout/checkout').then(c => c.Checkout) },
  { path: 'order-success', loadComponent: () => import('./modules/order-success/order-success').then(c => c.OrderSuccess) },
  { path: 'wishlist', loadComponent: () => import('./modules/wishlist/wishlist').then(c => c.Wishlist) },
  { path: 'account', canActivate: [authGuard], loadComponent: () => import('./modules/account/account').then(c => c.Account) },
  { path: 'about', loadComponent: () => import('./modules/pages/about/about').then(c => c.About) },
  { path: 'shipping', loadComponent: () => import('./modules/pages/shipping/shipping').then(c => c.Shipping) },
  { path: 'faq', loadComponent: () => import('./modules/pages/faq/faq').then(c => c.Faq) },
  { path: 'contact', loadComponent: () => import('./modules/pages/contact/contact').then(c => c.Contact) },
  { path: 'product/:id', loadComponent: () => import('./modules/product-details/product-details').then(c => c.ProductDetails) },
  { path: 'login', loadComponent: () => import('./modules/login/login').then(c => c.Login) },
  {
    path: 'admin/products',
    canActivate: [adminGuard],
    loadComponent: () => import('./modules/admin/admin-products/admin-products').then(c => c.AdminProducts)
  },
  {
    path: 'admin/products/new',
    canActivate: [adminGuard],
    loadComponent: () => import('./modules/admin/admin-product-form/admin-product-form').then(c => c.AdminProductForm)
  },
  {
    path: 'admin/products/:id/edit',
    canActivate: [adminGuard],
    loadComponent: () => import('./modules/admin/admin-product-form/admin-product-form').then(c => c.AdminProductForm)
  },
  {
    path: 'admin/orders',
    canActivate: [adminGuard],
    loadComponent: () => import('./modules/admin/admin-orders/admin-orders').then(c => c.AdminOrders)
  },
  { path: '**', loadComponent: () => import('./modules/not-found/not-found').then(c => c.NotFound) },
];
