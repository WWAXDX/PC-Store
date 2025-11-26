import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar  implements OnDestroy{

  cartCount = 0;
  private sub: Subscription;

  constructor(private cart: CartService) {
    this.sub = this.cart.items$.subscribe(items => {
      this.cartCount = items.length;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
