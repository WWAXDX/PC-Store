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
    { id: 1, name: 'RTX 4070 Super', price: 2300 },
    { id: 2, name: 'Ryzen 7 7800X3D', price: 1600 },
    { id: 3, name: '16GB DDR5 6000MHz', price: 250 },
    { id: 4, name: '1TB NVMe SSD', price: 300 },
    { id: 5, name: 'MSI 27" 165Hz Monitor', price: 850 },
    { id: 6, name: 'DeepCool AK620 Cooler', price: 350 }
  ];

  constructor(private cart: CartService) {}

  add(product: any) {
    console.log('ProductsComponent: add clicked', product);
    this.cart.addToCart(product);
  }
}
