import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    // PC Parts

    /* Graphics Cards (GPU) */
    { 
      id: 1, 
      name: 'RTX 4070 Super', 
      price: 2300, 
      category: 'pc-parts', 
      subCategory: 'Graphics Cards (GPU)', 
      desc: '12GB GDDR6X for 1440p gaming',
      description: 'Best graphics card for 1440p gaming with high performance and excellent power efficiency.',
      features: [
        'Memory 12GB GDDR6X',
        'Boost Clock 2.61 GHz',
        'Professional cooling system',
        'Support for DLSS 3.5',
        'Ray Tracing enabled',
        'Power consumption 220W'
      ],
      image: '/assets/rtx-4070.jpg'
    },
    { 
      id: 2, 
      name: 'RTX 4060 Ti', 
      price: 1800, 
      category: 'pc-parts', 
      subCategory: 'Graphics Cards (GPU)', 
      desc: '8GB GDDR6 for 1080p performance',
      description: 'Excellent choice for 1080p gaming with modern features and efficiency.',
      features: [
        'Memory 8GB GDDR6',
        'Boost Clock 2.54 GHz',
        'Compact design',
        'DLSS 3.0 support',
        'Low power consumption 160W'
      ],
      image: '/assets/rtx-4060ti.jpg'
    },

    /* Processors (CPU) */
    { 
      id: 3, 
      name: 'Ryzen 7 7800X3D', 
      price: 1600, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '8-core with 3D V-Cache',
      description: 'Gaming powerhouse with 3D V-Cache technology for exceptional performance.',
      features: [
        '8 Cores / 16 Threads',
        '3D V-Cache 96MB',
        'Base Clock 4.2 GHz',
        'Boost up to 5.0 GHz',
        'AM5 Socket',
        'TDP 120W'
      ],
      image: '/assets/ryzen-7800x3d.jpg'
    },
    { 
      id: 4, 
      name: 'Intel Core i7-14700K', 
      price: 1700, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '20-core hybrid architecture',
      description: 'High-performance processor with hybrid architecture for gaming and productivity.',
      features: [
        '20 Cores (8P + 12E)',
        '28 Threads',
        'Boost up to 5.6 GHz',
        'Intel Turbo Boost Max 3.0',
        'LGA 1700 Socket',
        'Unlocked for overclocking'
      ],
      image: '/assets/i7-14700k.jpg'
    },

    /* Memory (RAM) */
    { 
      id: 5, 
      name: '16GB DDR5 6000MHz', 
      price: 250, 
      category: 'pc-parts', 
      subCategory: 'Memory (RAM)', 
      desc: 'Fast DDR5 for gaming',
      description: 'Fast DDR5 memory for modern gaming systems.',
      features: [
        'Capacity 16GB (2x8GB)',
        'Speed 6000 MHz',
        'CAS Latency CL36',
        'RGB lighting',
        'AMD EXPO & Intel XMP ready',
        'Lifetime warranty'
      ],
      image: '/assets/ram-16gb.jpg'
    },
    { 
      id: 6, 
      name: '32GB DDR5 6400MHz', 
      price: 450, 
      category: 'pc-parts', 
      subCategory: 'Memory (RAM)', 
      desc: 'Premium high-speed RAM',
      description: 'High-capacity premium RAM for demanding workloads and gaming.',
      features: [
        'Capacity 32GB (2x16GB)',
        'Speed 6400 MHz',
        'CAS Latency CL32',
        'Premium RGB lighting',
        'Optimized for Ryzen 7000',
        'Lifetime warranty'
      ],
      image: '/assets/ram-32gb.jpg'
    },

    /* Storage (SSD/HDD) */
    { 
      id: 7, 
      name: '1TB NVMe SSD', 
      price: 300, 
      category: 'pc-parts', 
      subCategory: 'Storage (SSD/HDD)', 
      desc: 'Gen4 up to 7000 MB/s',
      description: 'Fast NVMe storage for quick boot times and game loading.',
      features: [
        'Capacity 1TB',
        'PCIe Gen4 interface',
        'Read speed up to 7000 MB/s',
        'Write speed up to 5000 MB/s',
        '5-year warranty',
        'DRAM cache included'
      ],
      image: '/assets/ssd-1tb.jpg'
    },
    { 
      id: 8, 
      name: '2TB NVMe Gen4 SSD', 
      price: 550, 
      category: 'pc-parts', 
      subCategory: 'Storage (SSD/HDD)', 
      desc: 'High-capacity performance',
      description: 'Premium high-capacity NVMe SSD with excellent performance.',
      features: [
        'Capacity 2TB',
        'PCIe Gen4 x4',
        'Read speed up to 7400 MB/s',
        'Write speed up to 6800 MB/s',
        'Advanced thermal management',
        '5-year warranty'
      ],
      image: '/assets/ssd-2tb.jpg'
    },

    /* CPU Coolers */
    { 
      id: 9, 
      name: 'DeepCool AK620 Cooler', 
      price: 350, 
      category: 'pc-parts', 
      subCategory: 'CPU Coolers', 
      desc: 'Dual tower air cooler',
      description: 'Dual-tower air cooler with excellent cooling performance.',
      features: [
        'Dual tower design',
        '2x 120mm fans',
        'TDP support up to 260W',
        'Low noise operation',
        'Universal socket support',
        '6 heat pipes'
      ],
      image: '/assets/ak620.jpg'
    },
    { 
      id: 10, 
      name: 'Noctua NH-D15', 
      price: 450, 
      category: 'pc-parts', 
      subCategory: 'CPU Coolers', 
      desc: 'Premium silent cooling',
      description: 'Premium air cooler known for exceptional performance and silence.',
      features: [
        'Dual tower flagship model',
        '2x NF-A15 140mm fans',
        'Ultra-quiet operation',
        'TDP support up to 220W',
        '6-year warranty',
        'Best-in-class cooling'
      ],
      image: '/assets/nh-d15.jpg'
    },

    /* Motherboards */
    { 
      id: 11, 
      name: 'ASUS ROG Strix B650-A', 
      price: 800, 
      category: 'pc-parts', 
      subCategory: 'Motherboards', 
      desc: 'AM5 with DDR5 & PCIe 5.0',
      description: 'Feature-rich AM5 motherboard for Ryzen 7000 series.',
      features: [
        'AMD B650 chipset',
        'DDR5 support',
        'PCIe 5.0 ready',
        'WiFi 6E & 2.5G LAN',
        'RGB lighting ecosystem',
        'Premium power delivery'
      ],
      image: '/assets/b650-strix.jpg'
    },

    /* Power Supplies */
    { 
      id: 12, 
      name: 'Corsair RM850x PSU', 
      price: 500, 
      category: 'pc-parts', 
      subCategory: 'Power Supplies', 
      desc: '850W 80+ Gold modular',
      description: 'Fully modular 80+ Gold certified power supply.',
      features: [
        '850W capacity',
        '80 PLUS Gold certified',
        'Fully modular cables',
        'Zero RPM fan mode',
        '10-year warranty',
        'Japanese capacitors'
      ],
      image: '/assets/rm850x.jpg'
    },

    /* Cases */
    { 
      id: 13, 
      name: 'Lian Li O11 Dynamic', 
      price: 600, 
      category: 'pc-parts', 
      subCategory: 'Cases', 
      desc: 'Dual chamber premium case',
      description: 'Premium dual-chamber case with excellent airflow and aesthetics.',
      features: [
        'Dual chamber design',
        'Tempered glass panels',
        'Support for 9x 120mm fans',
        'Multiple radiator mounting',
        'USB Type-C front panel',
        'Cable management system'
      ],
      image: '/assets/o11-dynamic.jpg'
    },


    // Monitors

    /* Gaming Monitors */
    { 
      id: 14, 
      name: 'MSI 27" 165Hz Gaming', 
      price: 850, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'QHD 165Hz for esports',
      description: 'Fast refresh rate gaming monitor for competitive gaming.',
      features: [
        '27-inch QHD display',
        '165Hz refresh rate',
        '1ms response time',
        'FreeSync & G-Sync compatible',
        'HDR ready',
        'Anti-glare coating'
      ],
      image: '/assets/msi-165hz.jpg'
    },
    { 
      id: 15, 
      name: 'ASUS ROG 32" 240Hz', 
      price: 1500, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'Premium 240Hz G-Sync',
      description: 'Premium high-refresh gaming monitor for esports enthusiasts.',
      features: [
        '32-inch QHD panel',
        '240Hz refresh rate',
        '0.5ms GTG response',
        'NVIDIA G-Sync Ultimate',
        'HDR 600',
        'ASUS GameVisual modes'
      ],
      image: '/assets/rog-240hz.jpg'
    },

    /* 4K Monitors */
    { 
      id: 16, 
      name: 'LG 27" 4K UHD', 
      price: 1200, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K IPS for creators',
      description: 'Crystal clear 4K monitor for content creation and gaming.',
      features: [
        '27-inch 4K UHD',
        '60Hz refresh rate',
        'IPS panel technology',
        '99% sRGB color gamut',
        'HDR10 support',
        'USB-C connectivity'
      ],
      image: '/assets/lg-4k.jpg'
    },

    /* Ultrawide Monitors */
    { 
      id: 17, 
      name: 'Samsung 34" Ultrawide', 
      price: 1800, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: 'Curved 3440x1440 display',
      description: 'Immersive ultrawide curved monitor for multitasking and gaming.',
      features: [
        '34-inch curved display',
        '3440x1440 resolution',
        '100Hz refresh rate',
        '1000R curvature',
        'Picture-by-Picture mode',
        'KVM switch support'
      ],
      image: '/assets/samsung-ultrawide.jpg'
    },

    /* Professional Monitors */
    { 
      id: 18, 
      name: 'Dell 27" Professional', 
      price: 1100, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: 'Color-accurate for pros',
      description: 'Color-accurate monitor for professional work.',
      features: [
        '27-inch QHD display',
        '99% Adobe RGB',
        'Factory calibrated',
        'USB-C hub with 90W PD',
        'Adjustable stand',
        'Anti-glare screen'
      ],
      image: '/assets/dell-pro.jpg'
    },


    // Chairs

    /* Gaming Chairs */
    { 
      id: 19, 
      name: 'Secretlab Titan Evo', 
      price: 1800, 
      category: 'chairs', 
      subCategory: 'Gaming Chairs', 
      desc: 'Premium ergonomic design',
      description: 'Premium gaming chair with exceptional comfort and build quality.',
      features: [
        'NEO Hybrid Leatherette',
        '4-way adaptive lumbar support',
        'Magnetic memory foam head pillow',
        'Recline up to 165°',
        'Cold-cure foam padding',
        '5-year warranty'
      ],
      image: '/assets/titan-evo.jpg'
    },

    /* Office Chairs */
    { 
      id: 20, 
      name: 'Herman Miller Aeron', 
      price: 3500, 
      category: 'chairs', 
      subCategory: 'Office Chairs', 
      desc: 'Iconic ergonomic chair',
      description: 'Iconic ergonomic office chair for all-day comfort.',
      features: [
        'PostureFit SL support',
        '8Z Pellicle suspension',
        'Fully adjustable arms',
        'Tilt limiter function',
        'Breathable mesh design',
        '12-year warranty'
      ],
      image: '/assets/aeron.jpg'
    },

    /* Ergonomic Chairs */
    { 
      id: 21, 
      name: 'ErgoChair Pro', 
      price: 1200, 
      category: 'chairs', 
      subCategory: 'Ergonomic Chairs', 
      desc: 'Adjustable mesh comfort',
      description: 'Affordable ergonomic chair with excellent adjustability.',
      features: [
        'Adjustable lumbar support',
        'Breathable mesh back',
        'Adjustable headrest',
        '3D armrests',
        'Seat depth adjustment',
        '3-year warranty'
      ],
      image: '/assets/ergochair.jpg'
    },


    // Accessories

    /* Keyboards */
    { 
      id: 22, 
      name: 'Logitech G Pro X', 
      price: 450, 
      category: 'accessories', 
      subCategory: 'Keyboards', 
      desc: 'Hot-swap mechanical TKL',
      description: 'Professional mechanical keyboard designed for esports.',
      features: [
        'Hot-swappable switches',
        'Tenkeyless design',
        'LIGHTSYNC RGB',
        'Detachable cable',
        'Durable PBT keycaps',
        'Tournament-ready'
      ],
      image: '/assets/g-pro-x.jpg'
    },

    /* Mice */
    { 
      id: 23, 
      name: 'Razer Viper V3 Pro', 
      price: 350, 
      category: 'accessories', 
      subCategory: 'Mice', 
      desc: 'Ultra-light wireless 59g',
      description: 'Ultra-lightweight wireless gaming mouse.',
      features: [
        'Focus Pro 30K sensor',
        '59g lightweight',
        'HyperSpeed wireless',
        '90-hour battery life',
        'Gen-3 optical switches',
        'Esports-grade performance'
      ],
      image: '/assets/viper-v3.jpg'
    },

    /* Headsets */
    { 
      id: 24, 
      name: 'SteelSeries Arctis Nova Pro', 
      price: 600, 
      category: 'accessories', 
      subCategory: 'Headsets', 
      desc: '360° audio with ANC',
      description: 'Premium gaming headset with active noise cancellation.',
      features: [
        '360° spatial audio',
        'Active noise cancellation',
        'Premium speakers',
        'ClearCast Gen 2 mic',
        'Multi-platform support',
        'Infinity Power System'
      ],
      image: '/assets/arctis-nova.jpg'
    },

    /* Speakers */
    { 
      id: 25, 
      name: 'Logitech Z623 Speakers', 
      price: 400, 
      category: 'accessories', 
      subCategory: 'Speakers', 
      desc: '200W THX certified',
      description: 'Powerful 2.1 speaker system for immersive audio.',
      features: [
        '200W RMS power',
        'THX certified',
        'Deep bass subwoofer',
        'Multiple inputs',
        'On-speaker controls',
        '2-year warranty'
      ],
      image: '/assets/z623.jpg'
    },

    /* Webcams */
    { 
      id: 26, 
      name: 'Logitech C920 Webcam', 
      price: 250, 
      category: 'accessories', 
      subCategory: 'Webcams', 
      desc: '1080p HD streaming',
      description: 'Full HD webcam for streaming and video calls.',
      features: [
        '1080p at 30fps',
        'Autofocus lens',
        'Dual stereo mics',
        'Wide 78° field of view',
        'Tripod-ready',
        'Universal clip mount'
      ],
      image: '/assets/c920.jpg'
    },

    /* Cables */
    { 
      id: 27, 
      name: 'USB-C Cable 2m', 
      price: 30, 
      category: 'accessories', 
      subCategory: 'Cables', 
      desc: '100W PD fast charging',
      description: 'High-quality USB-C cable for fast charging and data transfer.',
      features: [
        '2-meter length',
        'USB 3.2 Gen 2',
        '100W power delivery',
        '10Gbps data transfer',
        'Durable braided design',
        'Lifetime warranty'
      ],
      image: '/assets/usb-c.jpg'
    },
    { 
      id: 28, 
      name: 'HDMI 2.1 Cable 3m', 
      price: 50, 
      category: 'accessories', 
      subCategory: 'Cables', 
      desc: '8K support with eARC',
      description: 'Premium HDMI cable supporting 4K 120Hz and 8K.',
      features: [
        '3-meter length',
        'HDMI 2.1 certified',
        '8K at 60Hz support',
        '4K at 120Hz',
        'eARC & VRR support',
        'Gold-plated connectors'
      ],
      image: '/assets/hdmi.jpg'
    },

    /* USB Hubs */
    { 
      id: 29, 
      name: 'USB Hub 7-Port', 
      price: 80, 
      category: 'accessories', 
      subCategory: 'USB Hubs', 
      desc: 'Powered USB 3.0 hub',
      description: 'Powered USB hub with 7 ports for multiple devices.',
      features: [
        '7 USB 3.0 ports',
        'Individual power switches',
        '5Gbps data transfer',
        'LED indicators',
        'Compact aluminum design',
        'AC adapter included'
      ],
      image: '/assets/usb-hub.jpg'
    },

    /* Cleaning Kits */
    { 
      id: 30, 
      name: 'PC Cleaning Kit', 
      price: 60, 
      category: 'accessories', 
      subCategory: 'Cleaning Kits', 
      desc: 'Complete maintenance set',
      description: 'Complete cleaning kit for PC maintenance.',
      features: [
        'Air duster spray',
        'Microfiber cloths',
        'Cleaning solution',
        'Brush set',
        'Anti-static gloves',
        'Storage case included'
      ],
      image: '/assets/cleaning-kit.jpg'
    },

    /* Thermal Paste */
    { 
      id: 31, 
      name: 'Thermal Grizzly Paste', 
      price: 40, 
      category: 'accessories', 
      subCategory: 'Thermal Paste', 
      desc: 'High-performance compound',
      description: 'High-performance thermal compound for optimal cooling.',
      features: [
        'Premium thermal conductivity',
        'Easy application',
        'Non-conductive',
        'Long-lasting performance',
        '1g syringe',
        'Professional grade'
      ],
      image: '/assets/thermal-paste.jpg'
    }
  ];

  constructor() {}

  // Get all products
  getAllProducts(): Product[] {
    return this.products;
  }

  // Get product by ID
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  // Get products by category
  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  // Get products by subcategory
  getProductsBySubCategory(subCategory: string): Product[] {
    return this.products.filter(p => p.subCategory === subCategory);
  }

  // Filter products by category or subcategory
  filterProducts(category: string | null): Product[] {
    if (!category) {
      return this.products;
    }
    return this.products.filter(p => 
      p.category === category || p.subCategory === category
    );
  }

  // Group products by subcategory
  groupBySubCategory(products: Product[]): { [key: string]: Product[] } {
    const grouped: { [key: string]: Product[] } = {};
    products.forEach(product => {
      const subCat = product.subCategory;
      if (!grouped[subCat]) {
        grouped[subCat] = [];
      }
      grouped[subCat].push(product);
    });
    return grouped;
  }
}
