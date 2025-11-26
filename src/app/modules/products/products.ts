import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  fakeProducts = [
    { name: 'RTX 4070 super', price: 2300 },
    { name: 'Ryzen 7 7800X3D', price: 1600 },
    { name: '16GB GGR5 6000MHz', price: 250 },
    { name: '1TB NVMe SSD', price: 300 },
    { name: 'MSI 27\" 165Hz', price: 850 },
    { name: 'DeepCool AK620', price: 350 },
  ];

  constructor(private cart: CartService) {}

  add(product: any) {
    this.cart.addToCart(product);
  }

}
