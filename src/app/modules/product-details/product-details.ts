import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {

   product = {
    name: 'RTX 4070 Super',
    price: 2300,
    description: 'Best graphics card for 1440p gaming with high performance and excellent power efficiency.',
    features: [
      'Memory 12GB GDDR6X',
      'High clock speeds 2.61 GHz',
      'Professional cooling',
      'Support for DLSS 3.5'
    ]
  };

}
