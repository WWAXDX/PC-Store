<h2>Your Cart</h2>

<div *ngFor="let item of cart.getCartItems(); let i = index" class="cart-item">
  <h3>{{ item.name }}</h3>
  <p>{{ item.price }} <img src="assets/riyals.svg" class="currency-icon"></p>

  <button (click)="remove(i)">Remove</button>
</div>

<hr>

<h3>Total:</h3>
<p>{{ cart.getTotal() }} <img src="assets/riyals.svg" class="currency-icon"></p>
