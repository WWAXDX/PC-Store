import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {

  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cart: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.productService.getProductById(+id) || null;
      if (!this.product) {
        this.router.navigate(['/products']);
      }
    }
  }

  addToCart(product: Product) {
    this.cart.addToCart(product);
  }
}
 
