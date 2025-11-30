<nav class="navbar-top">
  <div class="left">
    <h2 class="logo">PCParts</h2>
  </div>

  <div class="right">
    <!-- Login Icon -->
    <i class="bi bi-person-circle nav-icon"></i>

    <!-- Cart Icon with badge -->
    <div class="cart-wrapper" routerLink="/cart">
      <i class="bi bi-cart3 nav-icon"></i>
      <span class="badge">{{ cartCount }}</span>
    </div>
  </div>
</nav>

<nav class="navbar-bottom">
  <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
  <a routerLink="/products" routerLinkActive="active">Products</a>
  <a routerLink="/cart" routerLinkActive="active">Cart</a>
</nav>
