import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products implements OnInit {
  allProducts = [
    // PC Parts

    /* Graphics Cards (GPU) */
    { id: 1, name: 'RTX 4070 Super', price: 2300, category: 'pc-parts', subCategory: 'Graphics Cards (GPU)', desc: '12GB GDDR6X for 1440p gaming' },
    { id: 2, name: 'RTX 4060 Ti', price: 1800, category: 'pc-parts', subCategory: 'Graphics Cards (GPU)', desc: '8GB GDDR6 for 1080p performance' },

    /* Processors (CPU) */
    { id: 3, name: 'Ryzen 7 7800X3D', price: 1600, category: 'pc-parts', subCategory: 'Processors (CPU)', desc: '8-core with 3D V-Cache' },
    { id: 4, name: 'Intel Core i7-14700K', price: 1700, category: 'pc-parts', subCategory: 'Processors (CPU)', desc: '20-core hybrid architecture' },

    /* Memory (RAM) */
    { id: 5, name: '16GB DDR5 6000MHz', price: 250, category: 'pc-parts', subCategory: 'Memory (RAM)', desc: 'Fast DDR5 for gaming' },
    { id: 6, name: '32GB DDR5 6400MHz', price: 450, category: 'pc-parts', subCategory: 'Memory (RAM)', desc: 'Premium high-speed RAM' },

    /* Storage (SSD/HDD) */
    { id: 7, name: '1TB NVMe SSD', price: 300, category: 'pc-parts', subCategory: 'Storage (SSD/HDD)', desc: 'Gen4 up to 7000 MB/s' },
    { id: 8, name: '2TB NVMe Gen4 SSD', price: 550, category: 'pc-parts', subCategory: 'Storage (SSD/HDD)', desc: 'High-capacity performance' },

    /* CPU Coolers */
    { id: 9, name: 'DeepCool AK620 Cooler', price: 350, category: 'pc-parts', subCategory: 'CPU Coolers', desc: 'Dual tower air cooler' },
    { id: 10, name: 'Noctua NH-D15', price: 450, category: 'pc-parts', subCategory: 'CPU Coolers', desc: 'Premium silent cooling' },

    /* Motherboards */
    { id: 11, name: 'ASUS ROG Strix B650-A', price: 800, category: 'pc-parts', subCategory: 'Motherboards', desc: 'AM5 with DDR5 & PCIe 5.0' },

    /* Power Supplies */
    { id: 12, name: 'Corsair RM850x PSU', price: 500, category: 'pc-parts', subCategory: 'Power Supplies', desc: '850W 80+ Gold modular' },

    /* Cases */
    { id: 13, name: 'Lian Li O11 Dynamic', price: 600, category: 'pc-parts', subCategory: 'Cases', desc: 'Dual chamber premium case' },


    // Monitors

    /* Gaming Monitors */
    { id: 14, name: 'MSI 27" 165Hz Gaming', price: 850, category: 'monitors', subCategory: 'Gaming Monitors', desc: 'QHD 165Hz for esports' },
    { id: 15, name: 'ASUS ROG 32" 240Hz', price: 1500, category: 'monitors', subCategory: 'Gaming Monitors', desc: 'Premium 240Hz G-Sync' },

    /* 4K Monitors */
    { id: 16, name: 'LG 27" 4K UHD', price: 1200, category: 'monitors', subCategory: '4K Monitors', desc: '4K IPS for creators' },

    /* Ultrawide Monitors */
    { id: 17, name: 'Samsung 34" Ultrawide', price: 1800, category: 'monitors', subCategory: 'Ultrawide Monitors', desc: 'Curved 3440x1440 display' },

    /* Professional Monitors */
    { id: 18, name: 'Dell 27" Professional', price: 1100, category: 'monitors', subCategory: 'Professional Monitors', desc: 'Color-accurate for pros' },


    // Chairs

    /* Gaming Chairs */
    { id: 19, name: 'Secretlab Titan Evo', price: 1800, category: 'chairs', subCategory: 'Gaming Chairs', desc: 'Premium ergonomic design' },

    /* Office Chairs */
    { id: 20, name: 'Herman Miller Aeron', price: 3500, category: 'chairs', subCategory: 'Office Chairs', desc: 'Iconic ergonomic chair' },

    /* Ergonomic Chairs */
    { id: 21, name: 'ErgoChair Pro', price: 1200, category: 'chairs', subCategory: 'Ergonomic Chairs', desc: 'Adjustable mesh comfort' },


    // Accessories

    /* Keyboards */
    { id: 22, name: 'Logitech G Pro X', price: 450, category: 'accessories', subCategory: 'Keyboards', desc: 'Hot-swap mechanical TKL' },

    /* Mice */
    { id: 23, name: 'Razer Viper V3 Pro', price: 350, category: 'accessories', subCategory: 'Mice', desc: 'Ultra-light wireless 59g' },

    /* Headsets */
    { id: 24, name: 'SteelSeries Arctis Nova Pro', price: 600, category: 'accessories', subCategory: 'Headsets', desc: '360° audio with ANC' },

    /* Speakers */
    { id: 25, name: 'Logitech Z623 Speakers', price: 400, category: 'accessories', subCategory: 'Speakers', desc: '200W THX certified' },

    /* Webcams */
    { id: 26, name: 'Logitech C920 Webcam', price: 250, category: 'accessories', subCategory: 'Webcams', desc: '1080p HD streaming' },

    /* Cables */
    { id: 27, name: 'USB-C Cable 2m', price: 30, category: 'accessories', subCategory: 'Cables', desc: '100W PD fast charging' },
    { id: 28, name: 'HDMI 2.1 Cable 3m', price: 50, category: 'accessories', subCategory: 'Cables', desc: '8K support with eARC' },

    /* USB Hubs */
    { id: 29, name: 'USB Hub 7-Port', price: 80, category: 'accessories', subCategory: 'USB Hubs', desc: 'Powered USB 3.0 hub' },

    /* Cleaning Kits */
    { id: 30, name: 'PC Cleaning Kit', price: 60, category: 'accessories', subCategory: 'Cleaning Kits', desc: 'Complete maintenance set' },

    /* Thermal Paste */
    { id: 31, name: 'Thermal Grizzly Paste', price: 40, category: 'accessories', subCategory: 'Thermal Paste', desc: 'High-performance compound' }
  ];

  displayedProducts: any[] = [];
  selectedCategory: string | null = null;
  selectedSubCategory: string | null = null;
  groupedProducts: { [key: string]: any[] } = {};

  constructor(private cart: CartService, private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || null;
      this.filterProducts();
    });
  }

  filterProducts() {
    if (!this.selectedCategory) {
      this.displayedProducts = this.allProducts;
    } else {
      this.displayedProducts = this.allProducts.filter(product => 
        product.category === this.selectedCategory || 
        product.subCategory === this.selectedCategory
      );
    }
    this.groupBySubCategory();
  }

  groupBySubCategory() {
    this.groupedProducts = {};
    this.displayedProducts.forEach(product => {
      const subCat = product.subCategory;
      if (!this.groupedProducts[subCat]) {
        this.groupedProducts[subCat] = [];
      }
      this.groupedProducts[subCat].push(product);
    });
  }

  getSubCategories(): string[] {
    return Object.keys(this.groupedProducts);
  }

  add(product: any) {
    console.log('ProductsComponent: add clicked', product);
    this.cart.addToCart(product);
  }
}
