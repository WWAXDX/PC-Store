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
      name: 'Gigabyte WINDFORCE OC SFF GeForce RTX 5070 12GB', 
      price: 2050, 
      category: 'pc-parts', 
      subCategory: 'Graphics Cards (GPU)', 
      desc: '12GB GDDR6X for 1440p gaming',
      description: 'The Gigabyte WINDFORCE OC SFF GeForce RTX 5070 is a high-performance graphics card designed for 1440p gaming excellence. Built on NVIDIA\'s Ada Lovelace architecture, this compact powerhouse delivers exceptional gaming performance while maintaining a small form factor ideal for compact PC builds. Featuring 12GB of ultra-fast GDDR6X memory running at 21 Gbps, the RTX 5070 provides smooth gameplay in the latest AAA titles. The WINDFORCE cooling system utilizes advanced fan technology with alternate spinning fans to optimize airflow and reduce turbulence, ensuring your GPU stays cool even during intensive gaming sessions. With support for real-time ray tracing and DLSS 3.0 technology, you can enjoy stunning visual fidelity and significantly improved frame rates. The card operates at a boost clock of 2.48 GHz and draws 250W of power, striking an excellent balance between performance and efficiency. Perfect for gamers who want high-end 1440p performance in a compact package.',
      features: [
        'Memory 12GB GDDR6X',
        'Boost Clock 2.48 GHz',
        'Compact design for small builds',
        'Ray Tracing and DLSS support',
        'Power consumption 250W',
        'Core Clock 2160 MHz',
        'Boost Clock 2542 MHz'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/763a47f348ec493a6f53fffe82daca09.1600.jpg',
      onSale: true,
      salePrice: 1749,
      discount: 15
    },
    { 
      id: 2, 
      name: 'Sapphire PULSE Radeon RX 9060 XT 16GB', 
      price: 1450, 
      category: 'pc-parts', 
      subCategory: 'Graphics Cards (GPU)', 
      desc: '16GB GDDR6 for 1080p gaming',
      description: 'The Sapphire PULSE Radeon RX 9060 XT represents AMD\'s commitment to delivering exceptional value and performance for 1080p gaming enthusiasts. Equipped with a generous 16GB of GDDR6 memory, this graphics card is manufactured by Sapphire Technology, renowned for their expertise in AMD GPU production. The PULSE series features Sapphire\'s innovative Dual-X cooling technology, which employs two premium ball-bearing fans that deliver superior airflow while maintaining whisper-quiet operation. The card boasts impressive clock speeds with a core clock of 2220 MHz and a boost clock reaching up to 3.29 GHz, ensuring smooth performance across all modern games. With AMD\'s latest RDNA architecture, the RX 9060 XT supports hardware-accelerated ray tracing, bringing realistic lighting and reflections to your gaming experience. The card\'s efficient design consumes only 160W of power, making it an excellent choice for budget-conscious builders who don\'t want to invest in a high-wattage power supply. The large 16GB memory buffer ensures excellent performance in memory-intensive games and provides future-proofing for upcoming titles.',
      features: [
        'Memory 16GB GDDR6',
        'Boost Clock 2.5 GHz',
        'Dual-X cooling technology',
        'Ray Tracing support',
        'Power consumption 160W',
        'Core Clock 2220 MHz',
        'Boost Clock 3290 MHz'

      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/814dd4fff0d20c7503e54641a2c02947.1600.jpg',
      onSale: true,
      salePrice: 1249,
      discount: 14
    },
    {
        id: 3,
        name: 'MSI GeForce RTX 3060 VENTUS 2X 12GB',
        price: 1100,
        category: 'pc-parts',
        subCategory: 'Graphics Cards (GPU)',
        desc: '12GB GDDR6 for mainstream gaming',
        description: 'The MSI GeForce RTX 3060 VENTUS 2X 12G is a mainstream gaming powerhouse from MSI, one of the world\'s leading gaming hardware manufacturers. Built on NVIDIA\'s Ampere architecture, this graphics card delivers excellent 1080p performance and solid 1440p capabilities at a competitive price point. The VENTUS 2X cooling solution features MSI\'s renowned dual fan design with TORX Fan 3.0 technology, which generates concentrated airflow while maintaining low noise levels. With 12GB of GDDR6 memory running at 15 Gbps, the RTX 3060 provides ample video memory for modern games, content creation, and multitasking. The card operates at a core clock of 1320 MHz and boosts up to 1777 MHz, delivering consistent performance across various gaming scenarios. It supports NVIDIA\'s cutting-edge technologies including real-time ray tracing for lifelike lighting effects, DLSS 2.0 for AI-powered performance boosts, and NVIDIA Reflex for competitive gaming advantages. With a modest 170W power requirement, this card is perfect for upgrading existing systems without needing a new power supply. The VENTUS series offers exceptional value for gamers seeking reliable performance without breaking the bank.',
        features: [
            'Memory 12GB GDDR6',
            'Boost Clock 1.78 GHz',
            'Dual fan cooling system',
            'Ray Tracing support',
            'Power consumption 170W',
            'Core Clock 1320 MHz',
            'Boost Clock 1777 MHz'
        ],
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/c740684e2cd2339bf845f7493711bcb7.1600.jpg',
        onSale: true,
        salePrice: 899,
        discount: 18
    },
    {
        id: 4,
        name: 'Asus PRIME GeForce RTX 5070 Ti 16GB',
        price: 2850,
        category: 'pc-parts',
        subCategory: 'Graphics Cards (GPU)',
        desc: '16GB GDDR6X for high-end gaming',
        description: 'The ASUS PRIME GeForce RTX 5070 Ti 16GB represents the pinnacle of high-end gaming performance from ASUS, a globally recognized leader in computer hardware innovation. This top-tier graphics card is engineered for enthusiasts who demand exceptional 1440p and 4K gaming experiences. Built on NVIDIA\'s latest architecture, it features 16GB of blazing-fast GDDR6X memory providing unprecedented bandwidth for the most demanding games and applications. The PRIME series incorporates ASUS\' Axial-tech fan design, which features a smaller fan hub to allow longer fan blades and a barrier ring that increases downward air pressure for improved heat dissipation. The card operates at an impressive boost clock of 2.61 GHz with a core clock of 2535 MHz, delivering exceptional frame rates in 4K gaming. With a 285W TDP, it strikes an optimal balance between power and performance. The RTX 5070 Ti supports all modern NVIDIA technologies including ray tracing for realistic lighting, DLSS 3.5 for AI-enhanced performance, and NVIDIA Reflex for reduced system latency in competitive gaming. Built with premium components and enhanced power delivery, this card ensures long-term reliability and stability even under sustained heavy loads.',
        features: [
            'Memory 16GB GDDR6X',
            'Boost Clock 2.61 GHz',
            'Axial-tech fan design',
            'Ray Tracing and DLSS support',
            'Power consumption 285W',
            'Core Clock 2535 MHz',
            'Boost Clock 2610 MHz'
        ],
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/43191ac360269737064e20b57d60c9b6.1600.jpg',
        onSale: true,
        salePrice: 2499,
        discount: 12
    },
    {
        id: 5,
        name: 'Asus ROG Astral OC GeForce RTX 5090 32GB',
        price: 13200,
        category: 'pc-parts',
        subCategory: 'Graphics Cards (GPU)',
        desc: '32GB GDDR6X for ultimate gaming',
        description: 'The ASUS ROG Astral OC GeForce RTX 5090 32GB is the absolute flagship of gaming graphics cards, representing the peak of ASUS Republic of Gamers\' engineering excellence. This ultra-premium graphics card is designed for extreme enthusiasts, professional content creators, and those who demand nothing but the absolute best in gaming performance. Featuring an unprecedented 32GB of ultra-fast GDDR6X memory, this beast can handle 4K gaming at maximum settings, 8K gaming, complex 3D rendering, and heavy AI workloads with ease. The ROG Astral cooling system is an engineering marvel, featuring four premium axial-tech fans with dual ball bearings for extended lifespan and reduced friction. The massive heatsink assembly uses high-grade thermal compound and MaxContact technology to ensure optimal heat transfer from the GPU die. Operating at a boost clock of 2.7 GHz from a core clock of 2010 MHz, this card delivers unmatched performance in every scenario. The factory overclock pushes performance even further while maintaining stability. With a 575W TDP, this card requires robust power delivery and cooling, but rewards you with benchmark-crushing performance. It includes all cutting-edge NVIDIA technologies: Ada Lovelace architecture, 4th generation ray tracing cores, 3rd generation tensor cores for DLSS 3.5, and support for PCIe 5.0. The ROG Astral also features customizable Aura Sync RGB lighting, premium metal backplate, and reinforced frame for maximum durability.',
        features: [
            'Memory 32GB GDDR6X',
            'Boost Clock 2.7 GHz',
            'Advanced ROG cooling system',
            'Ray Tracing and DLSS support',
            'Power consumption 575W',
            'Core Clock 2010 MHz',
            'Boost Clock 2610 MHz',
            '4 cooling fans'
        ],
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/0161407080353d18971dcccd15dc3722.1600.jpg'
    },
    {
        id: 6,
        name: 'PNY OC GeForce RTX 4080 16GB',
        price: 5720,
        category: 'pc-parts',
        subCategory: 'Graphics Cards (GPU)',
        desc: '16GB GDDR6X for 4K gaming',
        description: 'The PNY OC GeForce RTX 4080 16GB delivers exceptional 4K gaming performance from PNY Technologies, a trusted name in graphics cards since 1985. This high-performance GPU is built on NVIDIA\'s Ada Lovelace architecture, offering a perfect balance between flagship-level performance and value. Equipped with 16GB of lightning-fast GDDR6X memory running at 22.4 Gbps, the RTX 4080 provides the bandwidth needed for smooth 4K gaming and demanding creative workloads. The factory overclock pushes the boost clock to an impressive 2.73 GHz from a core clock of 2300 MHz, delivering superior performance out of the box. PNY\'s dual-fan cooling solution features large diameter fans with optimized blade design to maximize airflow while maintaining quiet operation. The aluminum heatsink with multiple copper heat pipes efficiently dissipates the 360W thermal output. This card supports all modern NVIDIA features including DLSS 3.0 for massive performance gains, real-time ray tracing for photorealistic graphics, NVIDIA Broadcast for content creators, and Reflex technology for competitive gaming. The robust metal backplate not only looks premium but also provides structural support and additional cooling for memory chips.',
        features: [
            'Memory 16GB GDDR6X',
            'Boost Clock 2.51 GHz',
            'Dual fan cooling system',
            'Ray Tracing and DLSS support',
            'Power consumption 360W',
            'Core Clock 2300 MHz',
            'Boost Clock 2730 MHz'
        ],
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/2067903b08f68363bc8c3f2efd5eec78.1600.jpg'
    },
    {
        id: 7,
        name: 'Asus PRIME GeForce RTX 4060 Ti 16GB',
        price: 1600,
        category: 'pc-parts',
        subCategory: 'Graphics Cards (GPU)',
        desc: '16GB GDDR6 for 1080p gaming',
        description: 'The ASUS PRIME GeForce RTX 4060 Ti 16GB offers excellent 1080p gaming performance with surprising 1440p capabilities, all wrapped in ASUS\' reliable PRIME series package. This mid-range powerhouse from ASUS features 16GB of next-generation GDDR7 memory, providing faster speeds and lower power consumption compared to GDDR6. Built on NVIDIA\'s efficient Ada Lovelace architecture, it delivers impressive performance while drawing only 220W of power. The PRIME series dual-fan cooling system utilizes Axial-tech fans with longer blades and dual ball bearings for improved airflow and durability. Operating at a boost clock of 2.54 GHz with a core clock of 2410 MHz, this card handles modern AAA games with ease. The 16GB memory buffer ensures smooth performance in high-texture games and provides headroom for future titles. Perfect for gamers who want RTX features like ray tracing and DLSS 3.0 without spending flagship money. The card features a sleek design with a protective backplate, RGB lighting accents, and reinforced frame for longevity.',
        features: [
            'Memory 16GB GDDR7',
            'Boost Clock 2.54 GHz',
            'Dual fan cooling system',
            'Ray Tracing and DLSS support',
            'Power consumption 220W',
            'Core Clock 2410 MHz',
            'Boost Clock 2602 MHz'
        ],
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/2dadfb40069848cc43ab9c10174166a0.1600.jpg'
    },
    {
        id: 8,
        name: 'ASRock Steel Legend Radeon RX 9070 XT 16GB',
        price: 2450,
        category: 'pc-parts',
        subCategory: 'Graphics Cards (GPU)',
        desc: '16GB GDDR6 for 1440p gaming',
        description: 'The ASRock Steel Legend Radeon RX 9070 XT 16GB combines ASRock\'s legendary build quality with AMD\'s cutting-edge RDNA architecture to deliver exceptional 1440p gaming performance. ASRock, known for their innovative motherboard designs, brings the same engineering excellence to their Steel Legend GPU series. This graphics card features 16GB of high-speed GDDR6 memory providing ample bandwidth for high-resolution textures and complex gaming scenarios. The Steel Legend series is renowned for its distinctive industrial design featuring camouflage patterns and RGB LED effects. The triple-fan Phantom Gaming cooling solution employs three 90mm fans with special blade designs to generate strong airflow while maintaining low noise levels. The massive aluminum heatsink with six copper heat pipes efficiently dissipates the 225W thermal output. Operating at a core clock of 2321 MHz and boosting up to 2.67 GHz, this card delivers consistent high frame rates in demanding titles. AMD\'s latest technologies including hardware-accelerated ray tracing, FidelityFX Super Resolution (FSR), and Radeon Anti-Lag ensure you get the best gaming experience. The reinforced metal backplate adds rigidity and helps cool memory chips and VRMs.',
        features: [
            'Memory 16GB GDDR6',
            'Boost Clock 2.6 GHz',
            'Triple fan cooling system',
            'Ray Tracing support',
            'Power consumption 225W',
            'Core Clock 2321 MHz',
            'Boost Clock 2670 MHz'
        ],
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/5ac290b617c665a5ecc73f5397688d79.1600.jpg'
    },

    /* Processors (CPU) */
    { 
      id: 9, 
      name: 'AMD Ryzen 7 7800X3D', 
      price: 1600, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '8-core with 3D V-Cache',
      description: 'The AMD Ryzen 7 7800X3D represents a revolutionary leap in gaming CPU performance, featuring AMD\'s groundbreaking 3D V-Cache technology. Manufactured by AMD (Advanced Micro Devices), this processor is built on the cutting-edge Zen 4 architecture using TSMC\'s 5nm process node. The standout feature is the innovative 3D V-Cache which stacks an additional 64MB of L3 cache on top of the existing 32MB, resulting in a massive 96MB total L3 cache. This enormous cache significantly reduces memory latency and improves gaming performance, often outperforming even higher-core-count processors in gaming scenarios. The 7800X3D features 8 high-performance cores with 16 threads, operating at a base clock of 4.2 GHz and boosting up to 5.0 GHz. Despite its impressive performance, it maintains an efficient 120W TDP, making it cooler and more power-efficient than previous generations. The processor uses AMD\'s AM5 socket platform supporting DDR5 memory and PCIe 5.0 for future-proof connectivity. It includes integrated RDNA 2 graphics for basic display output. Perfect for gamers who want the absolute best gaming performance without needing extreme cooling solutions.',
      features: [
        '8 Cores / 16 Threads',
        '3D V-Cache 96MB',
        'Base Clock 4.2 GHz',
        'Boost up to 5.0 GHz',
        'AM5 Socket',
        'TDP 120W'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.1600.jpg'
    },
    { 
      id: 10, 
      name: 'Intel Core i7-14700K', 
      price: 1700, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '20-core hybrid architecture',
      description: 'The Intel Core i7-14700K is Intel\'s flagship mainstream processor, showcasing the company\'s innovative hybrid architecture that combines Performance-cores (P-cores) and Efficient-cores (E-cores) for optimal multitasking and gaming performance. Built on Intel\'s refined 10nm Intel 7 process technology, this 14th generation Raptor Lake processor features 8 Performance cores and 12 Efficiency cores, totaling 20 cores with 28 threads. The hybrid design allows the P-cores to handle demanding gaming and single-threaded tasks while the E-cores manage background processes and multi-threaded workloads efficiently. With Intel Turbo Boost Max Technology 3.0, the processor can reach speeds up to an impressive 5.6 GHz on the P-cores, delivering exceptional performance in gaming and content creation. The unlocked "K" designation means full overclocking support for enthusiasts who want to push performance even further. The processor uses Intel\'s LGA 1700 socket and supports DDR5-5600 and DDR4-3200 memory, giving builders flexibility in their platform choice. It includes Intel UHD Graphics 770 for integrated graphics capability. With support for PCIe 5.0 and advanced technologies like Intel Thread Director for intelligent core scheduling, the i7-14700K represents the perfect balance between gaming prowess and productivity performance.',
      features: [
        '20 Cores (8P + 12E)',
        '28 Threads',
        'Boost up to 5.6 GHz',
        'Intel Turbo Boost Max 3.0',
        'LGA 1700 Socket',
        'Unlocked for overclocking'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/c3e5d01cec2fa20b6f47fe8a400c08d6.1600.jpg'
    },
    { 
      id: 11, 
      name: 'AMD Ryzen 9 7950X3D', 
      price: 2800, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '16-core with 3D V-Cache for ultimate performance',
      description: 'The AMD Ryzen 9 7950X3D is AMD\'s ultimate flagship processor, combining 16 high-performance Zen 4 cores with revolutionary 3D V-Cache technology for unmatched gaming and productivity performance. This processor features a hybrid design with 8 cores equipped with 3D V-Cache (96MB L3) optimized for gaming, and 8 cores without the cache optimized for multi-threaded workloads. With 16 cores and 32 threads, base clock of 4.2 GHz and boost up to 5.7 GHz, it dominates in both gaming and content creation. Built on TSMC 5nm process, it maintains a 120W TDP despite its massive performance. Uses AM5 socket with DDR5 and PCIe 5.0 support. Perfect for users who want the absolute best in both gaming and productivity without compromise.',
      features: [
        '16 Cores / 32 Threads',
        '3D V-Cache 128MB total L3',
        'Base Clock 4.2 GHz',
        'Boost up to 5.7 GHz',
        'AM5 Socket',
        'TDP 120W',
        'Integrated RDNA 2 Graphics'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/4f8b13807b9b9e2ab921ddb6e6e81afb.1600.jpg'
    },
    { 
      id: 12, 
      name: 'Intel Core i9-14900K', 
      price: 2600, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '24-core flagship for extreme performance',
      description: 'The Intel Core i9-14900K is Intel\'s flagship consumer processor, featuring 24 cores (8 P-cores + 16 E-cores) with 32 threads for extreme gaming and content creation performance. Built on Intel 7 process technology, it reaches boost speeds up to 6.0 GHz on P-cores, making it one of the fastest processors available. The unlocked multiplier allows for extensive overclocking. Supports DDR5-5600 and DDR4-3200 memory, PCIe 5.0, and includes Intel UHD Graphics 770. With 36MB Intel Smart Cache and Thermal Velocity Boost, it delivers consistent high performance. Uses LGA 1700 socket. Perfect for enthusiasts, streamers, and professionals who need maximum multi-threaded performance.',
      features: [
        '24 Cores (8P + 16E)',
        '32 Threads',
        'Boost up to 6.0 GHz',
        'Intel Turbo Boost Max 3.0',
        'LGA 1700 Socket',
        '36MB Intel Smart Cache',
        'Unlocked for overclocking',
        'DDR5 & DDR4 support'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/c9117c605854e9387e57cd69ebca2415.1600.jpg'
    },
    { 
      id: 13, 
      name: 'AMD Ryzen 5 7600X', 
      price: 950, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '6-core Zen 4 for mainstream gaming',
      description: 'The AMD Ryzen 5 7600X delivers exceptional gaming performance at a mainstream price point. Built on Zen 4 architecture with 6 cores and 12 threads, it offers base clock of 4.7 GHz and boost up to 5.3 GHz. Despite being a mid-range processor, it competes with much more expensive CPUs in gaming thanks to Zen 4\'s IPC improvements and high clock speeds. Features 32MB L3 cache, 105W TDP, AM5 socket compatibility, DDR5 support, and integrated RDNA 2 graphics. Perfect for gamers who want flagship-level gaming performance without the premium price tag. Excellent value for 1080p and 1440p gaming builds.',
      features: [
        '6 Cores / 12 Threads',
        'Base Clock 4.7 GHz',
        'Boost up to 5.3 GHz',
        '32MB L3 Cache',
        'AM5 Socket',
        'TDP 105W',
        'Integrated RDNA 2 Graphics',
        'PCIe 5.0 support'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/fd6305088c9d16d59017b380fb9c408a.1600.jpg'
    },
    { 
      id: 14, 
      name: 'Intel Core i5-14600K', 
      price: 1200, 
      category: 'pc-parts', 
      subCategory: 'Processors (CPU)', 
      desc: '14-core hybrid for excellent gaming value',
      description: 'The Intel Core i5-14600K offers outstanding gaming and productivity performance with 14 cores (6 P-cores + 8 E-cores) and 20 threads. Built on Intel 7 process, it features boost clocks up to 5.3 GHz on P-cores, delivering smooth gaming and multitasking. The unlocked multiplier enables overclocking for enthusiasts. Supports both DDR5-5600 and DDR4-3200 memory, providing platform flexibility. Includes Intel UHD Graphics 770, 24MB Intel Smart Cache, and PCIe 5.0 support. Uses LGA 1700 socket. Represents the sweet spot for gamers seeking excellent performance without flagship pricing. Perfect for high refresh rate 1080p and 1440p gaming.',
      features: [
        '14 Cores (6P + 8E)',
        '20 Threads',
        'Boost up to 5.3 GHz',
        '24MB Intel Smart Cache',
        'LGA 1700 Socket',
        'Unlocked for overclocking',
        'DDR5 & DDR4 support',
        'Intel UHD Graphics 770'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/c8f65245aff45313f03aaad255078883.1600.jpg'
    },

    /* Memory (RAM) */
    { 
      id: 15, 
      name: 'Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz', 
      price: 520, 
      category: 'pc-parts', 
      subCategory: 'Memory (RAM)', 
      desc: 'Premium RGB DDR5 for high-end builds',
      description: 'Corsair Vengeance RGB DDR5 delivers cutting-edge performance and stunning RGB lighting for premium gaming builds. Manufactured by Corsair, a global leader in gaming peripherals and components, this memory kit features hand-sorted, tightly screened memory chips for exceptional overclocking potential. The 32GB (2x16GB) configuration running at 6000MHz provides ample capacity and speed for demanding games, content creation, and multitasking. Built with a custom performance PCB for improved signal quality and stability, it ensures reliable operation even during intense gaming sessions. The iconic RGB lighting is fully customizable through Corsair iCUE software, allowing synchronization with other Corsair components. With a low CL30 latency, this kit delivers responsive performance. It supports both Intel XMP 3.0 and AMD EXPO profiles for easy one-click overclocking. The stylish aluminum heatspreader efficiently dissipates heat while adding a premium aesthetic. Backed by Corsair\'s limited lifetime warranty.',
      features: [
        'Capacity: 32GB (2x16GB)',
        'Speed: 6000MHz',
        'CAS Latency: CL30',
        'Voltage: 1.35V',
        'Customizable RGB lighting',
        'Intel XMP 3.0 & AMD EXPO',
        'Aluminum heatspreader',
        'Lifetime warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/5cdd0dfcd25374317a12808fa7f63c19.1600.jpg'
    },
    { 
      id: 16, 
      name: 'G.SKILL Trident Z5 RGB 32GB (2x16GB) 6400MHz DDR5', 
      price: 580, 
      category: 'pc-parts', 
      subCategory: 'Memory (RAM)', 
      desc: 'Extreme performance DDR5 with RGB',
      description: 'G.SKILL Trident Z5 RGB represents the pinnacle of DDR5 memory technology from G.SKILL, Taiwan\'s premier memory manufacturer with over 30 years of expertise. This flagship memory kit features meticulously hand-selected Samsung B-die chips capable of reaching 6400MHz speeds with tight CL32 timings. The 32GB dual-channel configuration provides exceptional bandwidth for gaming, 3D rendering, and heavy multitasking workloads. Each module is built with a 10-layer PCB design for superior signal integrity and overclocking headroom. The sleek aluminum heatspreader with Trident-styled design fin not only looks striking but also provides efficient thermal dissipation. The integrated RGB lighting features infinite color customization through G.SKILL\'s software or motherboard sync. Optimized for both Intel and AMD platforms with full XMP 3.0 and EXPO support. Rigorously tested for compatibility and reliability, backed by G.SKILL\'s lifetime warranty and legendary customer support.',
      features: [
        'Capacity: 32GB (2x16GB)',
        'Speed: 6400MHz',
        'CAS Latency: CL32',
        'Tested latency: 32-39-39-102',
        'Voltage: 1.4V',
        'Premium RGB lighting',
        'Intel XMP 3.0 ready',
        'Lifetime warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/abe765a4f68cc2629cc07af11ba793d1.1600.jpg'
    },
    { 
      id: 17, 
      name: 'Kingston FURY Beast DDR5 16GB (2x8GB) 5600MHz', 
      price: 280, 
      category: 'pc-parts', 
      subCategory: 'Memory (RAM)', 
      desc: 'Reliable DDR5 for gaming builds',
      description: 'Kingston FURY Beast DDR5 offers reliable performance at an accessible price point from Kingston Technology, the world\'s largest independent memory manufacturer. This 16GB kit (2x8GB) running at 5600MHz provides the perfect entry point into DDR5 technology for mainstream gaming builds. Built with Kingston\'s renowned quality standards, each module undergoes rigorous testing to ensure 100% compatibility and stability. The low-profile aluminum heatspreader effectively cools the memory while maintaining compatibility with large CPU coolers. Featuring Intel XMP 3.0 Certified profiles, setup is as simple as enabling XMP in BIOS. The FURY Beast series is designed to work seamlessly with both Intel and AMD platforms. With plug-and-play functionality at 5600MHz, it meets JEDEC specifications while offering overclocking potential for enthusiasts. Backed by Kingston\'s limited lifetime warranty and free technical support.',
      features: [
        'Capacity: 16GB (2x8GB)',
        'Speed: 5600MHz',
        'CAS Latency: CL36',
        'Voltage: 1.25V',
        'Low-profile heatspreader',
        'Intel XMP 3.0 Certified',
        'Plug N Play at 5600MHz',
        'Lifetime warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/de06e47f30113be2454ca5f59385695d.1600.jpg'
    },
    { 
      id: 18, 
      name: 'Corsair Dominator Platinum RGB 64GB (2x32GB) 6000MHz DDR5', 
      price: 950, 
      category: 'pc-parts', 
      subCategory: 'Memory (RAM)', 
      desc: 'Flagship DDR5 for extreme builds',
      description: 'Corsair Dominator Platinum RGB represents the absolute pinnacle of memory engineering from Corsair. This flagship 64GB kit (2x32GB) is designed for extreme enthusiasts, content creators, and professionals who demand uncompromising performance. Featuring Corsair\'s patented DHX cooling technology with dual-path heat management, these modules maintain optimal temperatures even during sustained heavy workloads. The premium die-cast aluminum construction with machined aluminum heatspreaders provides both exceptional cooling and a luxurious aesthetic. Running at 6000MHz with CL30 timings, this kit delivers massive bandwidth for 8K video editing, 3D rendering, scientific computing, and extreme gaming. The iconic 12 individually addressable Capellix RGB LEDs create stunning lighting effects controllable via Corsair iCUE. Equipped with a thermal sensor on each module for real-time temperature monitoring. Supports both Intel XMP 3.0 and AMD EXPO for effortless overclocking. Hand-sorted ICs ensure maximum overclocking potential. Limited lifetime warranty included.',
      features: [
        'Capacity: 64GB (2x32GB)',
        'Speed: 6000MHz',
        'CAS Latency: CL30',
        'Voltage: 1.35V',
        'DHX cooling technology',
        '12 Capellix RGB LEDs per module',
        'Integrated thermal sensors',
        'Intel XMP 3.0 & AMD EXPO',
        'Lifetime warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/2d5f8a5348178d69f75557c090aed328.1600.jpg'
    },
    { 
      id: 19, 
      name: 'TeamGroup T-Force Delta RGB 32GB (2x16GB) 6000MHz DDR5', 
      price: 450, 
      category: 'pc-parts', 
      subCategory: 'Memory (RAM)', 
      desc: 'Value RGB DDR5 with great performance',
      description: 'TeamGroup T-Force Delta RGB delivers impressive DDR5 performance with eye-catching RGB lighting at a competitive price point. TeamGroup, a Taiwanese memory specialist, has optimized this kit specifically for both Intel and AMD platforms. The 32GB capacity (2x16GB) at 6000MHz provides excellent performance for gaming and content creation. The unique 120° ultra-wide force flow RGB lighting creates a stunning visual display with vibrant colors synchronized via motherboard software. The dual-layer PCB design ensures stable signal transmission and overclocking capability. The curved aluminum heatspreader with geometric design not only looks distinctive but also provides efficient heat dissipation. Fully compatible with Intel XMP 3.0 and AMD EXPO profiles for easy performance tuning. Rigorously tested for compatibility across major motherboard brands. Excellent price-to-performance ratio for builders seeking RGB aesthetics without premium pricing.',
      features: [
        'Capacity: 32GB (2x16GB)',
        'Speed: 6000MHz',
        'CAS Latency: CL38',
        'Voltage: 1.35V',
        '120° ultra-wide RGB lighting',
        'Intel XMP 3.0 & AMD EXPO',
        'Curved aluminum heatspreader',
        'Lifetime warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/09e373465295e5629efd7959a7147a3b.1600.jpg'
    },

    /* Storage (SSD/HDD) */
    { 
      id: 20, 
      name: 'Samsung 990 PRO 2TB NVMe PCIe 4.0 SSD', 
      price: 750, 
      category: 'pc-parts', 
      subCategory: 'Storage (SSD/HDD)', 
      desc: 'Flagship PCIe 4.0 SSD with extreme performance',
      description: 'The Samsung 990 PRO represents the pinnacle of PCIe 4.0 NVMe SSD technology from Samsung, the world leader in memory and storage solutions. This flagship drive delivers exceptional sequential read speeds up to 7,450 MB/s and write speeds up to 6,900 MB/s, making it one of the fastest Gen4 SSDs available. Built with Samsung\'s latest V-NAND technology and proprietary controller, it offers sustained performance even during heavy workloads. The 2TB capacity provides ample storage for operating system, applications, and game library. Features Dynamic Thermal Guard technology to maintain optimal operating temperatures and prevent thermal throttling. Includes a nickel-coated controller and heat spreader label for efficient heat dissipation. Perfect for gamers, content creators, and professionals who demand maximum performance. Uses standard M.2 2280 form factor compatible with desktop and laptop systems. Backed by Samsung\'s industry-leading 5-year warranty with up to 1,200 TBW endurance rating.',
      features: [
        'Capacity: 2TB',
        'Interface: PCIe Gen 4.0 x4, NVMe 2.0',
        'Sequential Read: Up to 7,450 MB/s',
        'Sequential Write: Up to 6,900 MB/s',
        'Random Read: Up to 1,400K IOPS',
        'Random Write: Up to 1,550K IOPS',
        'Samsung V-NAND technology',
        'Dynamic Thermal Guard',
        '5-year warranty',
        'M.2 2280 form factor'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/4cdbd04a2d7c19789dd2bdc072b4a506.1600.jpg'
    },
    { 
      id: 21, 
      name: 'WD Black SN850X 1TB NVMe PCIe 4.0 SSD', 
      price: 450, 
      category: 'pc-parts', 
      subCategory: 'Storage (SSD/HDD)', 
      desc: 'Gaming-optimized NVMe for fast loading',
      description: 'The WD Black SN850X from Western Digital is purpose-built for gaming, offering blistering speeds and rock-solid reliability. This premium NVMe SSD delivers sequential read speeds up to 7,300 MB/s, ensuring near-instantaneous game loading and level transitions. Western Digital\'s Game Mode 2.0 technology optimizes performance specifically for gaming workloads, while predictive loading reduces texture pop-in and stuttering. The 1TB capacity provides plenty of space for your favorite AAA titles. Built with Western Digital\'s advanced 3D NAND technology and custom controller for consistent performance. Includes downloadable WD_BLACK Dashboard software for performance monitoring and firmware updates. The optional heatsink version (available separately) keeps temperatures in check during marathon gaming sessions. Compatible with PlayStation 5 as internal storage expansion. Perfect for competitive gamers and enthusiasts who demand the fastest loading times. 5-year limited warranty included.',
      features: [
        'Capacity: 1TB',
        'Interface: PCIe Gen 4.0 x4',
        'Sequential Read: Up to 7,300 MB/s',
        'Sequential Write: Up to 6,300 MB/s',
        'Random Read: Up to 1,200K IOPS',
        'Game Mode 2.0 technology',
        'Predictive loading',
        'PS5 compatible',
        '5-year warranty',
        'M.2 2280'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/8e6dbae8a0f3c6572216c8758ce5a0b5.1600.jpg'
    },
    { 
      id: 22, 
      name: 'Crucial P3 Plus 4TB NVMe PCIe 4.0 SSD', 
      price: 1100, 
      category: 'pc-parts', 
      subCategory: 'Storage (SSD/HDD)', 
      desc: 'Massive capacity with solid Gen4 performance',
      description: 'The Crucial P3 Plus offers an exceptional balance of performance, capacity, and value from Crucial (Micron Technology). This massive 4TB NVMe SSD provides enough storage for extensive game libraries, 4K video projects, and large datasets. Despite its value positioning, it delivers impressive sequential read speeds up to 5,000 MB/s and write speeds up to 4,200 MB/s thanks to PCIe Gen 4 technology. Built with Micron\'s proven 3D NAND flash, it offers excellent reliability and endurance. The generous 4TB capacity eliminates the need for multiple drives, simplifying system management. Features dynamic write acceleration for improved real-world performance and adaptive thermal protection to prevent overheating. Perfect for content creators, media professionals, and gamers with large libraries who need maximum storage without breaking the bank. Standard M.2 2280 form factor ensures broad compatibility. Backed by Crucial\'s 5-year limited warranty.',
      features: [
        'Capacity: 4TB',
        'Interface: PCIe Gen 4.0 x4',
        'Sequential Read: Up to 5,000 MB/s',
        'Sequential Write: Up to 4,200 MB/s',
        'Micron 3D NAND',
        'Dynamic write acceleration',
        'Adaptive thermal protection',
        'M.2 2280 form factor',
        '5-year warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/a9c5edf1af947acf48c1c55595977cde.1600.jpg'
    },
    { 
      id: 23, 
      name: 'Kingston KC3000 2TB NVMe PCIe 4.0 SSD', 
      price: 680, 
      category: 'pc-parts', 
      subCategory: 'Storage (SSD/HDD)', 
      desc: 'High-performance Gen4 with excellent endurance',
      description: 'Kingston KC3000 delivers flagship-level PCIe 4.0 performance with exceptional endurance ratings from Kingston Technology, a trusted name in storage solutions. This premium NVMe SSD features sequential read speeds up to 7,000 MB/s and write speeds up to 7,000 MB/s, placing it among the fastest Gen4 drives available. Built with 3D TLC NAND and Phison E18 controller, it excels in both synthetic benchmarks and real-world applications. The 2TB model offers an impressive 1,600 TBW endurance rating, making it ideal for heavy workstation use and content creation. Features compact M.2 2280 single-sided design for excellent compatibility with laptops and compact systems. Includes built-in thermal throttling protection and works seamlessly with optional heatsinks. Perfect for professionals and power users who need sustained high performance for demanding workloads. Backed by Kingston\'s 5-year warranty and legendary reliability.',
      features: [
        'Capacity: 2TB',
        'Interface: PCIe Gen 4.0 x4, NVMe',
        'Sequential Read: Up to 7,000 MB/s',
        'Sequential Write: Up to 7,000 MB/s',
        'Random Read: Up to 1,000K IOPS',
        'Phison E18 controller',
        '3D TLC NAND',
        'Endurance: 1,600 TBW',
        'Single-sided M.2 2280',
        '5-year warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/eebee485fe708ee3b75e8f5492348180.1600.jpg'
    },
    { 
      id: 24, 
      name: 'Seagate FireCuda 530 1TB NVMe PCIe 4.0 SSD with Heatsink', 
      price: 580, 
      category: 'pc-parts', 
      subCategory: 'Storage (SSD/HDD)', 
      desc: 'PS5-ready SSD with included heatsink',
      description: 'Seagate FireCuda 530 is a high-performance PCIe Gen4 NVMe SSD designed specifically for gaming, officially licensed for PlayStation 5 internal storage expansion. This drive delivers blazing sequential read speeds up to 7,300 MB/s and write speeds up to 6,000 MB/s, ensuring rapid game loading and smooth gameplay. The included premium aluminum heatsink provides efficient thermal management during extended gaming sessions, maintaining peak performance without throttling. Built with Seagate\'s proven 3D TLC NAND and Phison E18 controller for reliability and consistency. The 1TB capacity is perfect for expanding PS5 storage or building a high-performance gaming PC. Features Rescue Data Recovery Services included for peace of mind. Compatible with both desktop and laptop systems (heatsink removable for slim laptops). Seagate\'s 5-year limited warranty and excellent customer support complete the package. Perfect for serious gamers who demand maximum performance.',
      features: [
        'Capacity: 1TB',
        'Interface: PCIe Gen 4.0 x4',
        'Sequential Read: Up to 7,300 MB/s',
        'Sequential Write: Up to 6,000 MB/s',
        'Officially PS5 licensed',
        'Premium aluminum heatsink included',
        'Phison E18 controller',
        'Rescue Data Recovery Services',
        '5-year warranty',
        'M.2 2280'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/5fb19eb02f0baaa9ee8843195292b521.1600.jpg'
    },

    /* CPU Coolers */
    { 
      id: 25, 
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
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/7e2fa610fb149e2e72e22c0142ce20c1.1600.jpg'
    },
    { 
      id: 26, 
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
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/ca16d42d3e187f96c728c09183df14a7.med.1600.jpg'
    },
    { 
      id: 100, 
      name: 'Corsair iCUE H150i Elite LCD', 
      price: 1200, 
      category: 'pc-parts', 
      subCategory: 'CPU Coolers', 
      desc: '360mm AIO with LCD screen',
      description: 'Premium 360mm AIO liquid cooler featuring a vibrant 2.1" IPS LCD screen for displaying temps, GIFs, and system stats. Three Corsair ML RGB Elite fans deliver exceptional airflow and stunning lighting effects.',
      features: [
        '360mm radiator',
        '2.1" IPS LCD display',
        '3x ML120 RGB Elite fans',
        'TDP support up to 300W',
        'Corsair iCUE software',
        'Zero RPM mode',
        '5-year warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/eacc91b741eda1f196d910125506d5b4.1600.jpg'
    },
    { 
      id: 101, 
      name: 'NZXT Kraken Elite 360', 
      price: 1100, 
      category: 'pc-parts', 
      subCategory: 'CPU Coolers', 
      desc: '360mm AIO with customizable LCD',
      description: 'High-performance 360mm liquid cooler with 2.36" LCD display. Features RGB lighting and quiet operation. Perfect for high-end builds.',
      features: [
        '360mm radiator',
        '2.36" LCD screen',
        '3x 120mm RGB fans',
        'TDP support up to 280W',
        'NZXT CAM software',
        '6-year warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/b5af5d6ebb1594a90a21922fbdae33ed.1600.jpg'
    },
    { 
      id: 102, 
      name: 'be quiet! Dark Rock Pro 4', 
      price: 380, 
      category: 'pc-parts', 
      subCategory: 'CPU Coolers', 
      desc: 'Silent dual tower air cooler',
      description: 'Premium air cooler with virtually inaudible operation. Dual tower design with seven high-performance copper heat pipes.',
      features: [
        'Dual tower design',
        '7 copper heat pipes',
        'Silent Wings PWM fans',
        'TDP support up to 250W',
        'Extremely quiet <24.3 dB(A)',
        '3-year warranty'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/8ab57dc3c0eb346c72ef7a2405e31227.1600.jpg'
    },

    /* Motherboards */
    { 
      id: 103, 
      name: 'ASUS ROG Strix B650-A Gaming WiFi', 
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
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/127cc163cf3e552499471f1908f99cfe.1600.jpg'
    },
    { 
      id: 104, 
      name: 'MSI MAG B660 TOMAHAWK WIFI DDR4', 
      price: 750, 
      category: 'pc-parts', 
      subCategory: 'Motherboards', 
      desc: 'Intel B660 with WiFi 6E',
      description: 'Feature-packed B660 motherboard with WiFi 6E, 2.5G LAN, and premium power delivery for Intel 12th/13th gen.',
      features: [
        'Intel B660 chipset',
        'DDR4 support up to 5333MHz',
        'PCIe 4.0 slots',
        'WiFi 6E & 2.5G LAN',
        'Premium audio codec',
        'USB 3.2 Gen 2x2'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/42b49b9f2159609f852b3d66df24e1e5.1600.jpg'
    },
    { 
      id: 105, 
      name: 'Gigabyte X670 AORUS Elite AX ATX AM5', 
      price: 950, 
      category: 'pc-parts', 
      subCategory: 'Motherboards', 
      desc: 'AMD X670 flagship platform',
      description: 'High-end X670 motherboard with PCIe 5.0 support, DDR5, WiFi 6E, and robust VRM for Ryzen 7000 series.',
      features: [
        'AMD X670 chipset',
        'DDR5 support',
        'PCIe 5.0 M.2 & GPU slots',
        'WiFi 6E built-in',
        '18+2 phases power design',
        'Q-Flash Plus'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/ac3a77e0e11d610407a9ef39970b00d7.1600.jpg'
    },
    { 
      id: 106, 
      name: 'ASRock B550 Steel Legend', 
      price: 580, 
      category: 'pc-parts', 
      subCategory: 'Motherboards', 
      desc: 'Budget-friendly AMD B550',
      description: 'Excellent value B550 motherboard with PCIe 4.0, 2.5G LAN, and stylish Steel Legend design for Ryzen 5000.',
      features: [
        'AMD B550 chipset',
        'DDR4 support',
        'PCIe 4.0 M.2 slots',
        '2.5G LAN',
        'Polychrome RGB',
        'Steel Legend aesthetics'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/e45d552e13e60103e6fa9e4c89345e65.1600.jpg'
    },
    { 
      id: 107, 
      name: 'ASUS TUF Z790-Plus WiFi', 
      price: 1050, 
      category: 'pc-parts', 
      subCategory: 'Motherboards', 
      desc: 'Intel Z790 for 13th/14th gen',
      description: 'Durable TUF series Z790 motherboard with DDR5, PCIe 5.0, WiFi 6E, and military-grade components.',
      features: [
        'Intel Z790 chipset',
        'DDR5 support up to 7200MHz',
        'PCIe 5.0 ready',
        'WiFi 6E & 2.5G LAN',
        'TUF military-grade components',
        '16+1 power stages'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/aeb8a7dad48da098b42945e9439076fe.1600.jpg'
    },

    /* Power Supplies */
    { 
      id: 108, 
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
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/4f19c6453ce4ebe67091e6d9735f3a19.1600.jpg'
    },
    { 
      id: 109, 
      name: 'EVGA SuperNOVA 1000 GT', 
      price: 850, 
      category: 'pc-parts', 
      subCategory: 'Power Supplies', 
      desc: '1000W 80+ Gold for high-end builds',
      description: '1000W fully modular power supply with 80+ Gold efficiency. Perfect for high-end gaming rigs and workstations with multiple GPUs.',
      features: [
        '1000W capacity',
        '80 PLUS Gold certified',
        'Fully modular design',
        'Hydraulic Dynamic Bearing fan',
        '10-year warranty',
        '100% Japanese capacitors'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/a9a07a1471ce85451b73992f117a6343.1600.jpg'
    },
    { 
      id: 110, 
      name: 'Seasonic FOCUS GX-750', 
      price: 450, 
      category: 'pc-parts', 
      subCategory: 'Power Supplies', 
      desc: '750W 80+ Gold ultra quiet',
      description: 'Premium 750W PSU with 80+ Gold efficiency and ultra-quiet fan operation. Fully modular with premium components.',
      features: [
        '750W capacity',
        '80 PLUS Gold certified',
        'Fully modular cables',
        'Fluid Dynamic Bearing fan',
        '10-year warranty',
        'Seasonic quality'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/abb590d2c82a01a46977b969819326c8.1600.jpg'
    },
    { 
      id: 111, 
      name: 'Thermaltake Toughpower GF3 1000W', 
      price: 800, 
      category: 'pc-parts', 
      subCategory: 'Power Supplies', 
      desc: '1000W 80+ Gold ATX 3.0',
      description: 'ATX 3.0 compliant 1000W PSU with native PCIe 5.0 support. Ready for next-gen GPUs with excellent efficiency.',
      features: [
        '1000W capacity',
        'ATX 3.0 & PCIe 5.0 ready',
        '80 PLUS Gold certified',
        'Fully modular',
        '10-year warranty',
        '140mm hydraulic bearing fan'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/6d48de719caa79176caf445a9f7ecc85.1600.jpg'
    },
    { 
      id: 112, 
      name: 'be quiet! Pure Power 12 M 650W', 
      price: 380, 
      category: 'pc-parts', 
      subCategory: 'Power Supplies', 
      desc: '650W 80+ Gold silent operation',
      description: 'Quiet and efficient 650W PSU with 80+ Gold rating. Modular design with be quiet! Silent Wings fan technology.',
      features: [
        '650W capacity',
        '80 PLUS Gold certified',
        'Modular cables',
        'Silent Wings 3 fan',
        '10-year warranty',
        'Extremely quiet <15 dB(A)'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/05820c3bf82f0bec9f89b28b6a9fc4b5.1600.jpg'
    },

    /* Cases */
    { 
      id: 113, 
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
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/580387945cfb3fe6bac9ef5844c2b55f.1600.jpg'
    },
    { 
      id: 114, 
      name: 'NZXT H7 Flow', 
      price: 550, 
      category: 'pc-parts', 
      subCategory: 'Cases', 
      desc: 'High-airflow ATX case',
      description: 'Modern ATX case with excellent airflow mesh design. Includes 3 RGB fans, tempered glass panel, and cable management.',
      features: [
        'ATX/Micro-ATX support',
        'Tempered glass side panel',
        '3x RGB fans included',
        'Mesh front for airflow',
        'USB-C front panel',
        'Tool-free installation'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/9bf7a94808c71fa455cb146e8e1085eb.1600.jpg'
    },
    { 
      id: 115, 
      name: 'Fractal Design Meshify 2 Compact', 
      price: 480, 
      category: 'pc-parts', 
      subCategory: 'Cases', 
      desc: 'Compact mesh case with style',
      description: 'Compact ATX case with iconic angular mesh front. Excellent cooling and cable management in a smaller footprint.',
      features: [
        'Compact ATX design',
        'Signature mesh front',
        '2x fans included',
        'Supports 360mm radiator',
        'ModuVent top panel',
        'Nexus+ cable system'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/70ac697e3e6678daf16d38842957b0c0.1600.jpg'
    },
    { 
      id: 116, 
      name: 'Corsair 4000D Airflow', 
      price: 420, 
      category: 'pc-parts', 
      subCategory: 'Cases', 
      desc: 'Popular mid-tower with airflow',
      description: 'Best-selling mid-tower with optimized airflow design. Spacious interior with excellent cable management.',
      features: [
        'Mid-tower ATX',
        'High-airflow front panel',
        '2x 120mm fans included',
        'Tempered glass window',
        'RapidRoute cable management',
        'USB 3.1 Type-C'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.1600.jpg'
    },
    { 
      id: 117, 
      name: 'Phanteks Eclipse P400A', 
      price: 380, 
      category: 'pc-parts', 
      subCategory: 'Cases', 
      desc: 'Budget-friendly RGB case',
      description: 'Affordable ATX case with RGB lighting and mesh front. Great value with good airflow and clean aesthetics.',
      features: [
        'Mid-tower ATX',
        'Mesh front panel',
        '3x RGB fans included',
        'Tempered glass',
        'Vertical GPU support',
        'Integrated RGB controller'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/c62d93ddd59d252799a01f178b5da199.1600.jpg'
    },


    // Monitors

    /* Gaming Monitors */
    { 
      id: 118, 
      name: 'MSI Optix MAG274QRF-QD', 
      price: 850, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'QHD 165Hz for esports',
      description: 'The MSI Optix MAG274QRF-QD is a premium 27-inch gaming monitor designed specifically for competitive esports and fast-paced gaming. Built with MSI\'s renowned gaming expertise, this monitor features a stunning Quantum Dot IPS panel that delivers exceptional color accuracy covering 97% DCI-P3 and 124% sRGB color gamut, ensuring vibrant and lifelike visuals. The 2560x1440 QHD resolution provides the perfect balance between sharp image clarity and high frame rate performance, making it ideal for competitive shooters and esports titles. With a blazing-fast 165Hz refresh rate (overclockable to 170Hz) and rapid 1ms GTG response time, motion blur and ghosting are virtually eliminated, giving you a crucial competitive edge in fast-action scenarios. The monitor supports both AMD FreeSync Premium and NVIDIA G-Sync Compatible technology, ensuring buttery-smooth gameplay free from screen tearing and stuttering across all gaming platforms. MSI\'s exclusive Gaming Intelligence features include Night Vision technology to enhance visibility in dark scenes, and customizable gaming modes optimized for different game genres. The anti-glare matte coating reduces eye strain during extended gaming sessions, while the adjustable stand offers tilt, swivel, and height adjustment for optimal ergonomic comfort. Perfect for serious gamers who demand professional-grade performance without breaking the bank.',
      features: [
        '27-inch QHD display',
        '165Hz refresh rate',
        '1ms response time',
        'FreeSync & G-Sync compatible',
        'HDR ready',
        'Anti-glare coating'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/30f6ad5628a5425e94939b431bd85d55.1600.jpg'
    },
    { 
      id: 119, 
      name: 'ASUS ROG Swift OLED PG32UCDM', 
      price: 1500, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'Premium 240Hz G-Sync',
      description: 'The ASUS ROG Swift PG32UCDM represents the pinnacle of gaming monitor technology from ASUS Republic of Gamers. This flagship 32-inch gaming display features a revolutionary 4K UHD (3840x2160) QD-OLED panel that combines the infinite contrast and perfect blacks of OLED technology with the wide color gamut of Quantum Dot enhancement, covering 99% DCI-P3 color space for unprecedented visual fidelity. The monitor delivers an incredible 240Hz refresh rate at full 4K resolution, making it one of the fastest high-resolution gaming displays available, while the near-instantaneous 0.03ms GTG response time ensures zero motion blur even in the most chaotic gaming scenarios. Equipped with NVIDIA G-Sync Ultimate certification, it provides flawless variable refresh rate performance with HDR support, eliminating screen tearing and minimizing input lag for the most responsive gaming experience possible. The QD-OLED panel achieves DisplayHDR True Black 400 certification with peak brightness up to 1000 nits, delivering stunning HDR content with deep blacks and brilliant highlights. ASUS\'s exclusive GameVisual technology offers pre-calibrated display modes optimized for different game genres, while the proprietary cooling system prevents OLED burn-in through pixel shifting and screen savers. The premium design includes customizable RGB lighting, ROG-themed aesthetics, and a fully adjustable ergonomic stand with portrait mode capability. Built-in KVM switch allows seamless control of multiple devices, and the comprehensive connectivity includes DisplayPort 1.4, HDMI 2.1, and USB-C with 90W power delivery for one-cable laptop connectivity. Ideal for professional esports players, content creators, and enthusiast gamers who demand the absolute best in display technology.',
      features: [
        '32-inch QHD panel',
        '240Hz refresh rate',
        '0.5ms GTG response',
        'NVIDIA G-Sync Ultimate',
        'HDR 600',
        'ASUS GameVisual modes'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/d835718847c1c4cec8da0a0542002b8d.1600.jpg'
    },
    { 
      id: 120, 
      name: 'LG UltraGear 27GS75Q', 
      price: 980, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'QHD 180Hz with HDR400',
      description: 'The LG UltraGear 27GS75Q delivers exceptional gaming performance with LG\'s advanced Nano IPS technology, offering the perfect combination of speed, color accuracy, and value. This 27-inch QHD (2560x1440) gaming monitor features LG\'s proprietary 1-millisecond GTG Nano IPS panel that provides incredibly vibrant colors with 98% coverage of the DCI-P3 color space, ensuring rich, lifelike visuals that make games pop off the screen. The high 180Hz refresh rate (overclockable to 200Hz) delivers buttery-smooth motion handling for competitive gaming, while maintaining the superior color reproduction and wide viewing angles that IPS technology is known for. Compatible with both AMD FreeSync Premium and NVIDIA G-Sync, the monitor eliminates screen tearing and stuttering across all gaming platforms. VESA DisplayHDR 400 certification brings enhanced contrast and brightness to HDR-enabled games, with peak brightness reaching 400 nits for more realistic lighting effects. LG\'s exclusive gaming features include Dynamic Action Sync (DAS) mode to minimize input lag, Black Stabilizer to enhance visibility in dark scenes, and Crosshair overlay for improved aiming precision in FPS games. The sleek virtually borderless design on three sides provides an immersive viewing experience and makes it perfect for multi-monitor setups. The ergonomic stand offers full tilt, height, and pivot adjustability, while the monitor also includes built-in speakers for basic audio needs. OnScreen Control software allows easy customization of gaming modes and picture settings, and the monitor supports both DisplayPort 1.4 and HDMI 2.0 connectivity. Perfect for gamers who want flagship-level color performance and high refresh rates without the premium OLED price tag.',
      features: [
        '27-inch QHD (2560x1440)',
        '180Hz refresh rate',
        '1ms GTG response',
        'Nano IPS panel',
        'HDR400',
        'FreeSync & G-Sync compatible',
        'DCI-P3 98% color gamut'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/f0a8ee0622e57901d3c0d9037cbc0f11.1600.jpg'
    },
    { 
      id: 121, 
      name: 'AOC C27G2Z 27" 240Hz Curved', 
      price: 750, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'Curved 240Hz for competitive gaming',
      description: 'The AOC C27G2Z represents exceptional value in high-refresh gaming displays, offering professional-level performance at an accessible price point. This 27-inch curved gaming monitor features an aggressive 1500R curvature that wraps around your field of view, creating an immersive gaming experience that draws you into the action while reducing eye strain during extended gaming sessions. The Full HD (1920x1080) VA panel delivers a stunning 240Hz refresh rate, placing it in the same performance tier as monitors costing significantly more, making it perfect for competitive esports titles like CS:GO, Valorant, and Apex Legends where every millisecond counts. The ultra-fast 0.5ms MPRT (Moving Picture Response Time) ensures crystal-clear motion with minimal ghosting or blur, giving you the clarity needed to track fast-moving targets. AMD FreeSync Premium technology synchronizes the display\'s refresh rate with your GPU to eliminate screen tearing and stuttering, while also providing Low Framerate Compensation (LFC) for smooth gameplay even when frame rates drop. The VA panel technology provides superior contrast ratios (3000:1 static) compared to TN or IPS panels, delivering deeper blacks and more vibrant colors that make games look stunning. AOC\'s Low Input Lag mode minimizes delay between your actions and on-screen response, crucial for competitive gaming. Additional gaming features include Shadow Control to enhance visibility in dark areas, customizable gaming modes, and a frameless three-sided design that\'s ideal for multi-monitor racing or flight sim setups. The monitor includes built-in speakers, VESA mount compatibility, and a fully adjustable stand with tilt functionality. Connectivity options include DisplayPort 1.2, two HDMI 1.4 ports, and a VGA port for legacy compatibility. FlickerFree technology and Low Blue Light mode reduce eye fatigue during marathon gaming sessions. An outstanding choice for budget-conscious competitive gamers who refuse to compromise on refresh rate performance.',
      features: [
        '27-inch Full HD curved',
        '240Hz refresh rate',
        '0.5ms response time',
        '1500R curvature',
        'FreeSync Premium',
        'Frameless design'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/f2d189697dd22bdee32e3f78ac93ecf6.1600.jpg'
    },
    { 
      id: 122, 
      name: 'BenQ ZOWIE XL2566K 24.5" 360Hz', 
      price: 1850, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'Esports 360Hz TN panel',
      description: 'The BenQ ZOWIE XL2566K is the ultimate professional esports monitor, trusted by top-tier competitive gamers and esports teams worldwide including Cloud9, G2 Esports, and Team Liquid. This 24.5-inch Full HD display features BenQ\'s flagship Fast TN panel technology operating at a blistering 360Hz native refresh rate with true 0.5ms GTG response time, delivering the absolute lowest motion blur and fastest pixel transitions available in any gaming monitor. The display is meticulously engineered for competitive FPS gaming where every frame and millisecond matter. BenQ\'s exclusive DyAc+ (Dynamic Accuracy Plus) technology is the monitor\'s secret weapon, reducing motion blur through advanced backlight strobing while maintaining brightness, allowing you to track moving targets with unprecedented clarity during spray transfers and quick flicks. The native 360Hz refresh rate provides 2.78ms frame time (compared to 6.94ms on 144Hz displays), giving you the smoothest possible motion and earliest visual feedback on enemy movements. ZOWIE\'s XL Setting to Share feature allows you to save and share your complete monitor configuration via USB, making it easy to replicate your perfect settings at tournaments or LAN events. The monitor includes a shielding hood to minimize reflections and distractions, focusing your attention on the game. Color Vibrance and Black eQualizer controls are specifically tuned for esports, letting you adjust color saturation and shadow visibility without affecting overall brightness, ensuring maximum enemy spotspotting in dark corners. The innovative S-Switch remote controller provides instant access to all monitor settings without navigating OSD menus mid-game. The sturdy height-adjustable stand offers full ergonomic flexibility with tilt, swivel, pivot, and height adjustments, and features a clever cable management system. Connectivity includes DisplayPort 1.4 (required for 360Hz), HDMI 2.0, and a 3.5mm audio jack. Designed without bells and whistles like RGB lighting or fancy aesthetics, the XL2566K is built purely for competitive performance. The investment choice for serious esports athletes who demand tournament-grade equipment.',
      features: [
        '24.5-inch Full HD',
        '360Hz refresh rate',
        '0.5ms response',
        'TN panel',
        'DyAc+ technology',
        'XL Setting to Share',
        'Esports-grade'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/1667868670ceb2967edccbdb8314d0fe.1600.jpg'
    },

    /* 4K Monitors */
    { 
      id: 123, 
      name: 'LG 27UP850-W', 
      price: 1200, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K IPS for creators',
      description: 'The LG 27UP850-W is a versatile 4K UHD monitor designed for creative professionals, content creators, and gamers who demand exceptional image quality and connectivity flexibility. This 27-inch display features LG\'s premium IPS panel technology delivering stunning 3840x2160 resolution with pixel-perfect clarity ideal for photo editing, video production, graphic design, and high-resolution gaming. The monitor achieves impressive color accuracy covering 99% of the sRGB color space, making it suitable for color-critical work without requiring extensive calibration. HDR10 support with VESA DisplayHDR 400 certification brings enhanced dynamic range to HDR content, providing more realistic contrast and brighter highlights up to 400 nits peak brightness. The 60Hz refresh rate is perfect for productivity and creative workflows, while also supporting casual 4K gaming on modern consoles and PCs. The standout feature is the comprehensive USB-C connectivity with 96W Power Delivery, allowing you to connect, charge, and transmit video from compatible laptops using a single cable - eliminating desktop clutter and creating a clean, minimalist workspace. The built-in USB hub provides additional USB 3.0 ports for peripherals, essentially turning the monitor into a docking station. LG\'s OnScreen Control software enables easy picture mode switching, screen splitting into multiple workspaces, and customization of picture settings directly from your PC. The monitor includes AMD FreeSync technology for smoother gaming when connected to compatible graphics cards. The sleek 3-side virtually borderless design maximizes screen real estate and looks professional in any workspace. The fully adjustable ergonomic stand provides height, tilt, and pivot adjustment, including portrait mode for coding or document editing. Built-in 5W stereo speakers handle basic audio needs, while Reader Mode reduces blue light for comfortable long-duration viewing. Connectivity is comprehensive with DisplayPort 1.4, two HDMI 2.0 ports, USB-C with DP Alt Mode, USB hub, and headphone out. Perfect for hybrid workers, creative professionals, and anyone seeking a premium all-in-one display solution with laptop docking capabilities.',
      features: [
        '27-inch 4K UHD',
        '60Hz refresh rate',
        'IPS panel technology',
        '99% sRGB color gamut',
        'HDR10 support',
        'USB-C connectivity'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/f64ff7a015b5fa28d02581e939ec8a02.1600.jpg'
    },
    { 
      id: 124, 
      name: 'Samsung Odyssey Neo G7 32" 4K 165Hz', 
      price: 2800, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K 165Hz curved gaming',
      description: 'The Samsung Odyssey Neo G7 represents Samsung\'s flagship gaming display technology, combining bleeding-edge Quantum Mini LED backlighting with aggressive 1000R curvature for an unparalleled premium gaming experience. This 32-inch behemoth features a stunning 4K UHD (3840x2160) resolution paired with a buttery-smooth 165Hz refresh rate - a rare combination that delivers both incredible detail and competitive-level fluidity that was previously impossible at this resolution. The revolutionary Quantum Mini LED backlight system utilizes thousands of tiny LEDs (40 times smaller than conventional LEDs) arranged in precise local dimming zones, achieving VESA DisplayHDR 600 certification with peak brightness exceeding 1000 nits for stunning HDR content with deep blacks, brilliant highlights, and minimal blooming around bright objects. The Quantum Dot color technology covers 95% of the DCI-P3 color gamut, ensuring vibrant, accurate colors that make games look absolutely breathtaking. The extreme 1000R curvature (matching the curvature of the human eye) wraps the massive 32-inch screen around your field of view, creating unprecedented immersion while reducing eye strain by maintaining consistent viewing distance across the entire panel. Equipped with AMD FreeSync Premium Pro and NVIDIA G-Sync Compatible technology, the Neo G7 delivers tear-free, stutter-free gaming with both major GPU brands. The rapid 1ms GTG response time ensures motion clarity even in fast-paced shooters and racing games. Samsung\'s CoreSync+ technology analyzes screen content in real-time and projects ambient lighting from the rear of the monitor to match on-screen action, extending the visual experience beyond the display borders. The monitor includes Samsung\'s full suite of gaming features: Black Equalizer for shadow detail, Ultrawide Game View for aspect ratio adjustment, and game-specific picture modes. The sleek CoreSync Lighting ring on the rear adds customizable RGB ambiance. The height-adjustable stand with tilt and swivel capability ensures ergonomic comfort, while the premium matte screen coating reduces glare. Comprehensive connectivity includes DisplayPort 1.4 (required for full 4K 165Hz), dual HDMI 2.1 ports (perfect for PS5/Xbox Series X at 4K 120Hz), USB hub, and headphone jack. The built-in KVM switch allows seamless control of two connected devices with one set of peripherals. This monitor is the ultimate choice for enthusiast gamers with high-end PCs who want the absolute best visual experience money can buy.',
      features: [
        '32-inch 4K UHD curved',
        '165Hz refresh rate',
        'Quantum Mini LED',
        '1000R curvature',
        'HDR600',
        '1ms response time',
        'FreeSync Premium Pro'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/ae5d39519b173bac2b7c22761a56d411.1600.jpg'
    },
    { 
      id: 125, 
      name: 'ASUS TUF Gaming VG28UQL1A', 
      price: 1450, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K 144Hz for gaming',
      description: 'The ASUS TUF Gaming VG28UQL1A is the perfect bridge between competitive high-refresh gaming and stunning 4K visual fidelity, engineered for next-generation console and PC gaming. This 28-inch 4K UHD (3840x2160) display features a premium Fast IPS panel that delivers both exceptional color accuracy and an impressive 144Hz refresh rate - providing four times the pixel density of 1080p gaming while maintaining the smoothness needed for fast-paced competitive titles. The monitor is HDMI 2.1 certified, making it officially optimized for PlayStation 5 and Xbox Series X gaming at full 4K 120Hz, unlocking the true potential of next-gen consoles for an experience that was previously limited to PC gaming. The DisplayHDR 400 certification ensures vibrant HDR gaming with peak brightness reaching 400 nits, bringing games to life with improved contrast and color volume. The rapid 1ms MPRT response time minimizes motion blur and ghosting, crucial for tracking enemies in competitive shooters. NVIDIA G-Sync Compatible and AMD FreeSync Premium certification guarantee smooth, tear-free gameplay across all gaming platforms with variable refresh rate technology. ASUS\'s exclusive ELMB-Sync (Extreme Low Motion Blur) technology can be used simultaneously with G-Sync/FreeSync, providing motion blur reduction without sacrificing adaptive sync - a rare feature combination that gives you the best of both worlds. The monitor\'s TUF Gaming pedigree means it\'s built to military-grade reliability standards and rigorously tested for durability. GamePlus hotkey features include on-screen crosshairs, FPS counter, timer, and display alignment tools for competitive advantage. Shadow Boost technology enhances dark area visibility without overexposing bright regions, helping you spot enemies hiding in shadows. The ergonomic stand offers full height, tilt, swivel, and pivot adjustments for all-day comfort. Connectivity is comprehensive with DisplayPort 1.4, dual HDMI 2.1 ports (essential for 4K 120Hz console gaming), USB hub, and earphone jack. The monitor also includes built-in stereo speakers for basic audio. Flicker-Free and Low Blue Light technologies reduce eye strain during extended gaming marathons. Perfect for serious gamers who want the visual quality of 4K without sacrificing competitive refresh rates, and absolutely essential for anyone gaming on PS5 or Xbox Series X who wants to experience their console\'s full capabilities.',
      features: [
        '28-inch 4K UHD',
        '144Hz refresh rate',
        'HDMI 2.1',
        'G-Sync compatible',
        'DisplayHDR 400',
        '1ms MPRT',
        'Shadow Boost'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/7eaff54dcffe847768a0086730e30777.1600.jpg'
    },
    { 
      id: 126, 
      name: 'Dell S2722DC 27" 4K USB-C', 
      price: 1350, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K IPS with USB-C 65W',
      description: 'The Dell S2722DC is the ultimate productivity powerhouse designed specifically for modern hybrid workers, creative professionals, and laptop users who demand seamless connectivity and exceptional image quality. This sleek 27-inch 4K UHD (3840x2160) monitor features Dell\'s premium IPS Black technology - an advanced panel that delivers 35% deeper blacks and improved contrast compared to standard IPS displays, resulting in more vibrant images and better readability. The monitor achieves 99% sRGB color coverage right out of the box, making it suitable for photo editing and content creation without extensive calibration. The standout feature is comprehensive USB-C connectivity with 65W Power Delivery, allowing you to connect your laptop with a single cable that simultaneously charges your device, transmits video, and provides data connectivity - transforming this display into a complete docking station that declutters your workspace. The built-in USB hub provides additional USB-A and USB-C ports for connecting peripherals, external drives, and accessories directly to the monitor. Dell\'s ComfortView Plus technology is a game-changer for eye health, featuring a built-in low blue light solution that reduces harmful blue light emission by up to 60% while maintaining excellent color accuracy - unlike software solutions that tint your screen orange. This makes it perfect for users who spend long hours in front of the screen. The monitor is TÜV Rheinland certified for flicker-free operation and low blue light, meeting strict eye comfort standards. The ultra-thin bezels on three sides maximize screen real estate and create a premium, minimalist aesthetic perfect for modern offices. The fully adjustable stand provides height, tilt, swivel, and pivot (portrait mode) adjustments, ensuring ergonomic comfort for any workspace setup. Built-in dual 3W speakers provide convenient audio without requiring external speakers. Additional productivity features include Picture-in-Picture and Picture-by-Picture modes for multitasking between multiple input sources. Dell Display Manager software enables easy window management, auto-mode switching, and quick access to preset display modes. Connectivity includes USB-C with DP Alt Mode and 65W PD, DisplayPort 1.4, HDMI 1.4, USB 3.2 hub, and audio out. VESA mount compatibility allows flexible mounting options. The monitor comes backed by Dell\'s Premium Panel Guarantee, which covers even a single bright pixel defect during the limited hardware warranty. Ideal for professionals using MacBooks, Dell XPS, HP Spectre, ThinkPads, and other USB-C enabled laptops who want a premium all-in-one display solution with true single-cable docking.',
      features: [
        '27-inch 4K UHD',
        'IPS panel',
        'USB-C with 65W PD',
        '99% sRGB',
        'Built-in speakers',
        'VESA mount ready',
        'ComfortView Plus'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/59a7a2b9be42932dda321646bf593d93.1600.jpg'
    },
    { 
      id: 127, 
      name: 'BenQ SW270C 27" 4K for Photo Editing', 
      price: 1950, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K color-accurate for creators',
      description: 'The BenQ SW270C is a professional-grade color-critical monitor meticulously engineered for photographers, videographers, and design professionals who demand absolute color accuracy and reliability. This 27-inch 4K UHD (3840x2160) display features BenQ\'s advanced IPS panel technology with true 10-bit color depth (1.07 billion colors) to display smooth color gradations without banding - essential for professional photo and video editing workflows. The monitor achieves an exceptional 99% Adobe RGB color gamut coverage, along with 95% DCI-P3 and 100% sRGB/Rec.709, making it one of the most versatile displays available for professional content creation across different color workflows. Each SW270C is factory calibrated to Delta E ≤ 2 accuracy using advanced spectrophotometers, ensuring consistent, accurate color reproduction straight out of the box. The included detailed calibration report documents the exact color performance of your specific unit. The monitor supports hardware calibration via BenQ\'s Palette Master Element software working with X-Rite i1 Display Pro, Klein K10-A, or other professional colorimeters, allowing you to calibrate directly to the monitor\'s internal LUT for more accurate results than software-only calibration. The 16:9 aspect ratio and 2560x1440 resolution provide ample screen space for editing timelines, palettes, and toolbars alongside your content. Built for professional studios, the monitor features BenQ\'s Paper Color Sync technology that simulates how colors will appear when printed on different paper types, and GamutDuo mode which allows you to view your image in two different color spaces simultaneously for comparison. The included shading hood blocks ambient light and reflections, ensuring you\'re seeing true colors without environmental interference. The monitor\'s brightness uniformity technology maintains consistent brightness across the entire screen (≤3% deviation), critical for accurate editing. Hotkey Puck G2 controller provides quick access to frequently used settings without digging through OSD menus. USB-C connectivity with 60W Power Delivery handles video, data, and laptop charging through a single cable, while the built-in USB hub simplifies peripheral connectivity. Additional ports include DisplayPort, HDMI, and SD card reader for direct camera card access. The monitor features a fully adjustable stand with height, tilt, and swivel adjustments, plus VESA mounting. Backed by a 3-year warranty with free advanced replacement service. The investment choice for professional photographers, retouchers, videographers, and color grading professionals who cannot compromise on color accuracy.',
      features: [
        '27-inch 4K UHD',
        '99% Adobe RGB',
        'Factory calibrated',
        'IPS panel',
        'USB-C connectivity',
        'Hardware calibration',
        'Hotkey Puck included'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/462a6eae529ca38878bf3a96a3e12497.1600.jpg'
    },

    /* Ultrawide Monitors */
    { 
      id: 128, 
      name: 'Samsung ViewFinity S50GC 34"', 
      price: 1800, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: 'Curved 3440x1440 display',
      description: 'The Samsung ViewFinity S50GC delivers exceptional ultrawide productivity and entertainment in a premium 34-inch curved display designed for professionals and multitaskers who demand expansive screen real estate. Featuring a 21:9 ultrawide aspect ratio with 3440x1440 UWQHD resolution, this monitor provides 33% more horizontal workspace than standard 16:9 displays - equivalent to having two 27-inch monitors side-by-side without the bezels. The elegant 1000R curvature wraps the screen around your field of view, creating an immersive viewing experience while maintaining consistent focal distance across the entire display, reducing eye strain during extended work sessions. Samsung\'s VA panel technology delivers exceptional contrast ratios for deep blacks and vibrant colors, with HDR10 support enhancing multimedia content. The 100Hz refresh rate makes multitasking feel smooth and provides adequate performance for casual gaming. Picture-by-Picture feature allows you to connect and view content from two different sources simultaneously side-by-side - perfect for working on a laptop while monitoring a desktop. The built-in KVM switch is a productivity game-changer, allowing you to control both connected devices using a single keyboard and mouse. Comprehensive connectivity includes USB-C with 90W Power Delivery for single-cable laptop docking, DisplayPort, HDMI, and USB hub. Samsung\'s Eye Saver Mode reduces blue light emission, while Flicker-Free technology eliminates screen flicker for comfortable all-day viewing.',
      features: [
        '34-inch curved display',
        '3440x1440 resolution',
        '100Hz refresh rate',
        '1000R curvature',
        'Picture-by-Picture mode',
        'KVM switch support'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/db357313f3f2e4d8a794cd2c1dd6e6a1.1600.jpg'
    },
    { 
      id: 129, 
      name: 'LG 34GP83A-B UltraWide', 
      price: 1650, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: '34" curved 160Hz ultrawide',
      description: 'The LG 34GP83A-B UltraGear represents the sweet spot for ultrawide gaming monitors, combining LG\'s renowned Nano IPS color technology with competitive-level refresh rates in an immersive 34-inch curved format. This 21:9 ultrawide display features a 3440x1440 UWQHD resolution that delivers 33% more horizontal pixels than standard displays, providing expansive workspace for productivity and an incredibly immersive field of view for gaming - especially in racing sims, flight simulators, and open-world RPGs. LG\'s advanced 1-millisecond GTG Nano IPS panel technology offers exceptional color accuracy with 98% coverage of the DCI-P3 wide color gamut alongside fast response times. The high 160Hz native refresh rate (overclockable to 180Hz) ensures buttery-smooth motion handling, while the gentle 1900R curvature enhances immersion. VESA DisplayHDR 400 certification brings improved contrast and brightness to HDR content. Both AMD FreeSync Premium and NVIDIA G-Sync Compatible support eliminate screen tearing and stuttering. LG\'s comprehensive gaming features include Dynamic Action Sync mode to minimize input lag, Black Stabilizer for enhanced shadow detail, and Crosshair overlay. Picture-by-Picture and Picture-in-Picture modes allow viewing content from two sources simultaneously. The virtually borderless design maximizes screen immersion. Fully adjustable ergonomic stand provides height, tilt, and pivot adjustment. Connectivity includes DisplayPort, dual HDMI, USB hub, and headphone out.',
      features: [
        '34-inch ultrawide QHD',
        '160Hz refresh rate',
        'Nano IPS panel',
        'HDR400',
        'DCI-P3 95%',
        'FreeSync Premium',
        '1ms response time'
      ],
      image: 'https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/35c1d0be-389f-4a74-8818-9d38650a6b6e/md07515480-zoom-01-jpg?io=transform:fill,width:1200'
    },
    { 
      id: 130, 
      name: 'Dell Alienware AW3423DWF 34" OLED', 
      price: 3500, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: '34" QD-OLED ultrawide 165Hz',
      description: 'The Dell Alienware AW3423DWF represents a revolutionary breakthrough in gaming monitor technology, featuring cutting-edge QD-OLED panel technology that combines the infinite contrast and perfect blacks of OLED with vibrant Quantum Dot color performance. This 34-inch 21:9 ultrawide curved gaming monitor delivers a transformative visual experience. The 3440x1440 UWQHD QD-OLED panel achieves perfect pixel-level lighting control with infinite contrast ratio, meaning pure blacks where each pixel can turn completely off. The Quantum Dot layer enables spectacular color volume covering 99.3% DCI-P3 and 149% sRGB with incredible accuracy. DisplayHDR True Black 400 certification delivers stunning HDR content with contrast ratios LCD cannot match. The near-instantaneous 0.1ms GTG response time eliminates all ghosting and smearing. The 165Hz refresh rate with AMD FreeSync Premium Pro ensures tear-free gaming. The aggressive 1800R curvature wraps the expansive screen around your peripheral vision for maximum immersion. Anti-reflective coating minimizes glare. Includes AlienFX RGB lighting, Game Enhance mode, Creator mode, and built-in KVM switch. OLED Care features include pixel shifting and screen savers to minimize burn-in risk. Premium adjustable stand with full ergonomic flexibility. Connectivity includes DisplayPort, dual HDMI, USB hub, and headphone jack. The ultimate display for enthusiast gamers.',
      features: [
        '34-inch ultrawide QHD',
        'QD-OLED panel',
        '165Hz refresh rate',
        '0.1ms response time',
        'Infinite contrast ratio',
        'HDR True Black 400',
        'FreeSync Premium Pro'
      ],
      image: 'https://m.media-amazon.com/images/I/21lOJITD43L.jpg'
    },
    { 
      id: 131, 
      name: 'Samsung Odyssey G9 49" Super Ultrawide', 
      price: 4200, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: '49" dual QHD 240Hz curved',
      description: 'The Samsung Odyssey G9 is an extreme 49-inch super ultrawide gaming monitor with a jaw-dropping 32:9 aspect ratio and 5120x1440 Dual QHD resolution - equivalent to two 27-inch 1440p monitors fused seamlessly without bezels. The insane 1000R curvature literally wraps around your peripheral vision matching the natural curve of the human eye for maximum immersion. Samsung\'s Quantum Mini LED backlight technology achieves DisplayHDR 1000 certification with peak brightness exceeding 2000 nits and incredibly deep blacks. Quantum Dot technology ensures vibrant colors covering 95% DCI-P3. The wild 240Hz refresh rate at this massive resolution delivers unmatched smoothness for competitive gaming. Rapid 1ms GTG response time ensures motion clarity. Both G-Sync Compatible and FreeSync Premium Pro support eliminate tearing. CoreSync technology projects matching ambient lighting from the rear to extend the visual experience. Picture-by-Picture and Picture-in-Picture modes provide dual-monitor functionality. Premium design features customizable RGB CoreSync Lighting and height-adjustable stand with tilt and swivel. Connectivity includes DisplayPort 1.4, dual HDMI, USB hub, and headphone jack. Requires flagship GPU for full potential. The ultimate expression of gaming display technology for sim racing, flight sims, and maximum immersion.',
      features: [
        '49-inch super ultrawide',
        'Dual QHD 5120x1440',
        '240Hz refresh rate',
        '1000R curvature',
        'Quantum Mini LED',
        'HDR1000',
        'G-Sync compatible'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/034e1120405c86551cae15370eb23000.1600.jpg'
    },
    { 
      id: 132, 
      name: 'AOC CU34G2X 34" Curved 144Hz', 
      price: 1250, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: 'Budget ultrawide 144Hz',
      description: 'The AOC CU34G2X proves immersive ultrawide gaming doesn\'t have to break the bank, delivering exceptional value with 34-inch curved ultrawide real estate and competitive 144Hz refresh rate. This 21:9 display features 3440x1440 UWQHD resolution providing 33% more horizontal pixels than standard monitors - perfect for multitasking, immersive gaming in racing sims and flight games where peripheral vision creates tremendous advantage. The 1500R curvature gently wraps the screen around your field of view enhancing immersion. VA panel technology delivers superior contrast ratios (3000:1) compared to IPS, providing deeper blacks and vibrant colors. Rapid 144Hz refresh rate provides smooth motion handling for gaming and fluid desktop use. 1ms MPRT minimizes motion blur and ghosting. AMD FreeSync synchronizes display refresh with GPU to eliminate screen tearing. Extensive gaming features include Low Input Lag mode, Shadow Control to enhance dark area visibility, LowBlue Mode, and FlickerFree technology. Picture-in-Picture and Picture-by-Picture modes for viewing multiple sources simultaneously. Frameless three-sided design is ideal for multi-monitor setups. Connectivity includes DisplayPort, dual HDMI, VGA, and headphone jack. Built-in speakers provide basic audio. Outstanding value for gamers wanting ultrawide immersion and high refresh rates on a budget.',
      features: [
        '34-inch ultrawide QHD',
        '144Hz refresh rate',
        '1500R curvature',
        'VA panel',
        'FreeSync',
        '1ms MPRT',
        'Flicker-free'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/cccd4fa5a7d9cc206428edf9dba80cb9.1600.jpg'
    },

    /* Professional Monitors */
    { 
      id: 133, 
      name: 'Dell U2723QE 27" 4K', 
      price: 1100, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: 'Color-accurate for pros',
      description: 'The Dell U2723QE is Dell\'s flagship 27-inch professional 4K monitor designed for creative professionals, graphic designers, and productivity enthusiasts who demand exceptional color accuracy and comprehensive connectivity. This premium UltraSharp display features a 4K UHD (3840x2160) IPS Black panel - Dell\'s advanced panel technology delivering 2000:1 contrast ratio (double that of standard IPS), resulting in deeper blacks, improved color depth, and superior image quality. The monitor achieves excellent color coverage with 98% DCI-P3, 100% sRGB, and 100% Rec. 709, making it suitable for photo editing, video production, and graphic design work. Factory calibration ensures Delta E < 2 color accuracy right out of the box, and the monitor supports hardware calibration for even more precise color management. The standout connectivity feature is USB-C with 90W Power Delivery, allowing single-cable connection to laptops for video, data, and charging - transforming the monitor into a complete docking solution. The built-in KVM switch lets you control two connected devices with one keyboard and mouse, seamlessly switching between computers. Extensive USB-C and USB-A hub ports provide convenient peripheral connectivity. The monitor includes ComfortView Plus technology for flicker-free, low blue light emission without color shift, reducing eye strain during extended work sessions. Picture-by-Picture and Picture-in-Picture modes allow simultaneous viewing from multiple sources. The premium 3-side InfinityEdge design features ultra-thin bezels maximizing screen space. Fully adjustable stand offers height, tilt, swivel, and pivot adjustments including portrait mode. Additional features include built-in Ethernet port for stable network connectivity via USB-C, auto-brightness adjustment, and VESA DisplayHDR 400. Comprehensive connectivity includes USB-C with DP Alt Mode, DisplayPort, HDMI, RJ45 Ethernet, USB hub, and audio line-out. Backed by Dell\'s Premium Panel Exchange and 3-year Advanced Exchange Service.',
      features: [
        '27-inch QHD display',
        '99% Adobe RGB',
        'Factory calibrated',
        'USB-C hub with 90W PD',
        'Adjustable stand',
        'Anti-glare screen'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/639c8e5235fdbad4854b5c68ffc311ba.1600.jpg'
    },
    { 
      id: 134, 
      name: 'BenQ PD3220U 32" 4K Designer Monitor', 
      price: 2100, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: '32" 4K for design professionals',
      description: 'The BenQ PD3220U is a professional-grade 32-inch 4K monitor specifically engineered for graphic designers, CAD professionals, and creative teams requiring both expansive screen space and exceptional color accuracy. The large 32-inch 4K UHD (3840x2160) IPS panel provides ample workspace for complex designs, video timelines, and detailed technical drawings. Exceptional color coverage includes 95% DCI-P3, 99% Adobe RGB, and 100% sRGB/Rec.709, making this monitor versatile for different color workflows from print to web to video. Factory calibration with included calibration report ensures Delta E ≤ 3 accuracy out of box, and support for hardware calibration enables even more precise color management. The premium Thunderbolt 3 connectivity delivers 85W Power Delivery, 4K video signal, and high-speed data transfer through a single cable, while also serving as a hub for daisy-chaining additional Thunderbolt displays or devices. The built-in KVM switch with Hotkey Puck G2 controller allows seamless control of two connected computers using one keyboard and mouse, with quick switching between Mac and PC workstations. Advanced features include DualView mode to display content in two different color modes simultaneously for comparison, CAD/CAM mode optimized for technical drawings, Animation mode for animators, and Darkroom mode for photo editing. The AQCOLOR technology ensures consistent, accurate color reproduction. The ergonomic design includes fully adjustable stand with height, tilt, swivel, and pivot. Eye-care technologies include Low Blue Light and Flicker-Free for comfortable extended use. Connectivity includes Thunderbolt 3, DisplayPort, HDMI, USB-C, USB hub, Ethernet, SD card reader, and audio. Perfect for design studios and creative professionals.',
      features: [
        '32-inch 4K UHD',
        'Thunderbolt 3',
        'DCI-P3 95%',
        'Hardware calibration',
        'KVM switch',
        'Hotkey Puck G2',
        'IPS panel'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/8f20a339ec775fcdb33940281f70676a.1600.jpg'
    },
    { 
      id: 137, 
      name: 'ASUS ProArt PA279CV 27" 4K', 
      price: 1450, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: '4K ProArt for creators',
      description: 'The ASUS ProArt PA279CV delivers professional-grade color accuracy and comprehensive connectivity in ASUS\' acclaimed ProArt series designed specifically for content creators, photographers, and video editors. This 27-inch 4K UHD (3840x2160) IPS display achieves exceptional color coverage with 100% sRGB and 100% Rec. 709, ensuring accurate color reproduction for web, video, and broadcast workflows. Factory calibration guarantees Delta E < 2 color accuracy right out of the box - critical for color-critical work. The monitor is Calman Verified, meaning it meets strict color accuracy standards tested with professional calibration software used by Hollywood studios. USB-C connectivity with 65W Power Delivery provides single-cable docking for compatible laptops, handling video, data, and laptop charging simultaneously while the built-in USB hub expands connectivity options. ProArt Preset modes offer optimized color settings for different workflows including sRGB, Rec. 709, DCI-P3, and user-customizable modes. The monitor supports hardware calibration for precise color management using compatible colorimeters. ASUS Eye Care technology includes flicker-free backlighting, Low Blue Light certification, and adaptive brightness to reduce eye strain. The fully adjustable ergonomic stand provides height, tilt, swivel, and 90-degree pivot for portrait orientation - ideal for coding, document editing, or vertical content. Additional features include Picture-in-Picture and Picture-by-Picture for multitasking, QuickFit virtual grids for previewing actual-size documents, and extensive connectivity including USB-C with DP Alt Mode, DisplayPort, HDMI, USB hub, and audio out. The slim-bezel design looks professional in any workspace. Backed by ASUS\' 3-year warranty with rapid replacement service.',
      features: [
        '27-inch 4K UHD',
        '100% sRGB & Rec. 709',
        'Factory calibrated',
        'USB-C with 65W PD',
        'Calman Verified',
        'ProArt Preset modes',
        'Ergonomic stand'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/839820adeaeabcaa741a5b52afb591ee.1600.jpg'
    },
    { 
      id: 135, 
      name: 'LG 27UP850-W 27" 4K USB-C', 
      price: 1550, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: '4K with USB-C hub',
      description: 'The LG 27UP850-W is a premium 27-inch 4K professional monitor combining exceptional image quality with comprehensive USB-C docking capabilities, ideal for creative professionals and productivity users. The 4K UHD (3840x2160) IPS panel delivers stunning clarity and achieves 99% sRGB color coverage for accurate color reproduction in professional workflows. DisplayHDR 400 certification provides enhanced dynamic range with peak brightness reaching 400 nits. The comprehensive USB-C port with 96W Power Delivery is a standout feature, allowing you to connect, charge, and transmit video from compatible laptops using a single cable - creating a clean, clutter-free workspace while the built-in USB hub provides additional ports for peripherals. AMD FreeSync technology ensures smooth gaming when connected to compatible graphics cards. LG\'s OnScreen Control software enables easy picture mode switching and screen splitting into multiple workspaces. Reader Mode reduces blue light for comfortable document viewing. The fully adjustable ergonomic stand provides height, tilt, swivel, and pivot adjustment including portrait mode. Built-in 5W stereo speakers handle basic audio. The 3-side virtually borderless design maximizes screen real estate. Connectivity includes DisplayPort, dual HDMI, USB-C with DP Alt Mode, USB hub, and headphone out. Perfect for hybrid workers and creative professionals seeking a premium all-in-one display with laptop docking.',
      features: [
        '27-inch 4K UHD',
        'IPS panel',
        'USB-C 96W PD',
        '99% sRGB',
        'HDR400',
        'Height adjustable',
        'OnScreen Control'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/f64ff7a015b5fa28d02581e939ec8a02.1600.jpg'
    },
    { 
      id: 136, 
      name: 'HP Z27k G3 27" 4K USB-C', 
      price: 1800, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: 'Enterprise 4K with KVM',
      description: 'The HP Z27k G3 is an enterprise-grade 27-inch 4K professional monitor designed for demanding corporate environments, creative professionals, and power users who need exceptional image quality with advanced security and productivity features. The premium 4K UHD (3840x2160) IPS Black panel delivers superior contrast and deeper blacks compared to standard IPS technology. Exceptional color accuracy with 99% sRGB coverage and factory calibration makes it suitable for color-critical work. The comprehensive USB-C port with 100W Power Delivery provides the highest charging capability in its class, easily powering demanding laptops including HP ZBook mobile workstations while transmitting 4K video and data through a single cable. The built-in KVM (Keyboard, Video, Mouse) switch is a productivity powerhouse, allowing seamless control of two connected devices with a single keyboard and mouse - perfect for managing both a desktop workstation and laptop simultaneously. USB-C and USB-A hub ports provide extensive peripheral connectivity. HP Eye Ease with Eyesafe Certified low blue light technology reduces harmful blue light emission by up to 30% while maintaining color accuracy - unlike software solutions that shift colors. Anti-glare coating reduces reflections in bright office environments. The monitor includes enterprise security features like a Kensington lock slot and HP Sure Start for BIOS protection. Fully adjustable stand with height, tilt, swivel, and pivot adjustments. Connectivity includes USB-C with DP Alt Mode and 100W PD, DisplayPort, HDMI, RJ45 Ethernet, USB hub, and audio. Sustainable design includes 85% post-consumer recycled plastic. Backed by HP\'s 3-year limited warranty with advanced exchange.',
      features: [
        '27-inch 4K UHD',
        'IPS Black panel',
        'USB-C 100W PD',
        'Built-in KVM',
        '99% sRGB',
        'HP Eye Ease',
        'Security lock slot'
      ],
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/5cd3c4be70db2c91d8e3d2c97f83c5b0.1600.jpg'
    },


    // Chairs

    /* Gaming Chairs */
    { 
      id: 200, 
      name: 'Secretlab Titan Evo Stealth Gaming Chair', 
      price: 4000, 
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
      image: 'https://m.media-amazon.com/images/I/410uYasNqFL._AC_SX679_.jpg'
    },
    { 
      id: 201, 
      name: 'Razer Enki Pro Gaming Chair', 
      price: 1850, 
      category: 'chairs', 
      subCategory: 'Gaming Chairs', 
      desc: 'Premium gaming chair with lumbar support',
      description: 'Built-in lumbar arch, 152-degree recline, and memory foam cushions. Designed for extended gaming sessions.',
      features: [
        'Built-in lumbar arch',
        '152-degree recline',
        'Memory foam cushions',
        'Optimized shoulder arch',
        'Supports up to 299 lbs',
        '4D armrests',
        '3-year warranty'
      ],
      image: 'https://microless.com/cdn/products/44bce7f6cbd75ab30c2c4bfd5e61fabe-hi.jpg'
    },
    { 
      id: 202, 
      name: 'Secretlab Omega 2020', 
      price: 1600, 
      category: 'chairs', 
      subCategory: 'Gaming Chairs', 
      desc: 'Medium-size gaming chair',
      description: 'Cold-cure foam, PU leather 2.0, built-in lumbar support. Perfect for average-build gamers.',
      features: [
        'Cold-cure foam',
        'PU Leather 2.0',
        'Built-in lumbar',
        'Multi-tilt mechanism',
        'Supports up to 242 lbs',
        'Aluminum base',
        '5-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/41HV1OP+8BL._AC_.jpg'
    },
    { 
      id: 203, 
      name: 'Corsair T3 Rush Gaming Chair', 
      price: 950, 
      category: 'chairs', 
      subCategory: 'Gaming Chairs', 
      desc: 'Comfortable fabric gaming chair',
      description: 'Breathable soft fabric, padded armrests, and ergonomic design. Great value for long gaming sessions.',
      features: [
        'Breathable fabric',
        'Padded armrests',
        '180-degree recline',
        'Memory foam lumbar',
        'Supports up to 264 lbs',
        'Class 4 gas lift',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71EF7IZXAlL._AC_SX679_.jpg'
    },
    { 
      id: 204, 
      name: 'noblechairs EPIC Gaming Chair', 
      price: 1750, 
      category: 'chairs', 
      subCategory: 'Gaming Chairs', 
      desc: 'Real leather premium gaming chair',
      description: 'Real leather upholstery, cold foam padding, and aluminum base. Luxury gaming chair with premium materials.',
      features: [
        'Real leather',
        'Cold foam padding',
        'Aluminum 5-star base',
        'Integrated lumbar support',
        '135-degree recline',
        '4D armrests',
        'Made in Germany'
      ],
      image: 'https://sa.sihoo.com/cdn/shop/files/13_9CJPG.jpg?v=1761892661&width=1214'
    },

    /* Office Chairs */
    { 
      id: 205, 
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
      image: 'https://m.media-amazon.com/images/I/51mnVc7aozL._AC_SX679_.jpg'
    },
    { 
      id: 206, 
      name: 'Steelcase Series 1 Office Chair', 
      price: 1650, 
      category: 'chairs', 
      subCategory: 'Office Chairs', 
      desc: 'Smart ergonomic office chair',
      description: 'LiveBack technology mimics spine movement. Weight-activated controls and sustainable design.',
      features: [
        'LiveBack technology',
        'Weight-activated',
        '4-way adjustable arms',
        'Breathable mesh back',
        'Carpet casters',
        'Supports up to 300 lbs',
        '12-year warranty'
      ],
      image: 'https://www.conceptseating.com/wp-content/uploads/2020/09/3142-Front-CLoop.png'
    },
    { 
      id: 207, 
      name: 'Branch Ergonomic Chair', 
      price: 1350, 
      category: 'chairs', 
      subCategory: 'Office Chairs', 
      desc: 'Adjustable mesh office chair',
      description: 'Breathable mesh, adjustable lumbar support, and ergonomic design. Excellent value for professionals.',
      features: [
        'Breathable mesh',
        'Adjustable lumbar',
        'Height adjustable arms',
        'Tilt tension control',
        'Easy assembly',
        'Supports up to 275 lbs',
        '7-year warranty'
      ],
      image: 'https://officehub.sa/cdn/shop/files/1731326449849-EDITEDBlackBack.webp?v=1746611682&width=1380'
    },
    { 
      id: 208, 
      name: 'IKEA Markus Office Chair', 
      price: 450, 
      category: 'chairs', 
      subCategory: 'Office Chairs', 
      desc: 'Budget-friendly ergonomic chair',
      description: 'High backrest for neck support, tilt function, and durable fabric. Best budget office chair.',
      features: [
        'High backrest',
        'Built-in lumbar support',
        'Tilt function',
        'Durable fabric',
        'Adjustable height',
        'Supports up to 242 lbs',
        '10-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61IZUBGzC4L._AC_SX522_.jpg'
    },
    { 
      id: 209, 
      name: 'HON Ignition 2.0 Office Chair', 
      price: 1250, 
      category: 'chairs', 
      subCategory: 'Office Chairs', 
      desc: 'Professional mesh task chair',
      description: 'Advanced synchro-tilt, mesh back, and multiple adjustments. Designed for 8+ hour workdays.',
      features: [
        'Advanced synchro-tilt',
        'Mesh back & seat',
        'Height/width adjustable arms',
        'Seat depth adjustment',
        'Lumbar support',
        'Supports up to 300 lbs',
        '5-year warranty'
      ],
      image: 'https://sa.sihoo.com/cdn/shop/files/3_7c3b6470-6ef2-4b81-9e44-35ace89128bc.jpg?v=1751963398&width=1214'
    },

    /* Ergonomic Chairs */
    { 
      id: 210, 
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
      image: 'https://m.media-amazon.com/images/I/71iGqPHT1FL._AC_SY300_SX300_QL70_ML2_.jpg'
    },
    { 
      id: 211, 
      name: 'Herman Miller Aeron Chair (Remastered)', 
      price: 5500, 
      category: 'chairs', 
      subCategory: 'Ergonomic Chairs', 
      desc: 'Iconic ergonomic office chair',
      description: 'Legendary ergonomic design with 8Z Pellicle suspension, PostureFit SL, and fully adjustable. The gold standard.',
      features: [
        '8Z Pellicle suspension',
        'PostureFit SL lumbar',
        'Fully adjustable arms',
        'Tilt limiter',
        'Forward tilt',
        'Size B (medium)',
        '12-year warranty'
      ],
      image: 'https://officehub.sa/cdn/shop/files/1736335150345-Z11-005_KHAKI-The_right_side.webp?v=1750162005&width=1380'
    },
    { 
      id: 212, 
      name: 'Autonomous ErgoChair Pro', 
      price: 1850, 
      category: 'chairs', 
      subCategory: 'Ergonomic Chairs', 
      desc: 'Premium adjustable ergonomic chair',
      description: 'TPE cushioned backrest, adaptive spinal support, and full recline. Premium ergonomics at mid-range price.',
      features: [
        'TPE cushioned backrest',
        'Adaptive spinal support',
        '130-degree recline',
        'Adjustable headrest',
        '4D armrests',
        'Roller blade wheels',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61h1kRrIwRL._AC_SY300_SX300_QL70_ML2_.jpg'
    },
    { 
      id: 213, 
      name: 'Sihoo M18 Ergonomic Office Chair', 
      price: 850, 
      category: 'chairs', 
      subCategory: 'Ergonomic Chairs', 
      desc: 'Budget ergonomic with full adjustability',
      description: 'Breathable mesh, adjustable lumbar, headrest, and armrests. Best budget ergonomic option.',
      features: [
        'Full mesh design',
        'Adjustable lumbar support',
        '3D adjustable headrest',
        '3D armrests',
        '135-degree recline',
        'Rocking function',
        '3-year warranty'
      ],
      image: 'https://sa.sihoo.com/cdn/shop/files/12_e1f5ec7d-0ebc-431e-88d9-f0701a136ce6.jpg?v=1761892739&width=1214'
    },
    { 
      id: 214, 
      name: 'ErgoChair Recline', 
      price: 1450, 
      category: 'chairs', 
      subCategory: 'Ergonomic Chairs', 
      desc: 'Ergonomic reclining office chair',
      description: 'Multiple recline positions, leg rest, and Italian Donati mechanism. Work comfortably in any position.',
      features: [
        'Multiple recline positions',
        'Retractable leg rest',
        'Donati mechanism',
        'Mesh back',
        'Adjustable headrest',
        '2D armrests',
        '5-year warranty'
      ],
      image: 'https://www.conceptseating.com/wp-content/uploads/2023/02/3122-Front-CLoop.png'
    },


    // Accessories

    /* Keyboards */
    { 
      id: 300, 
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
      image: 'https://m.media-amazon.com/images/I/61xM6-EbmEL._AC_SL1500_.jpg'
    },
    { 
      id: 301, 
      name: 'Corsair K70 RGB Pro', 
      price: 550, 
      category: 'accessories', 
      subCategory: 'Keyboards', 
      desc: 'Full-size Cherry MX mechanical',
      description: 'Premium mechanical keyboard with Cherry MX switches and per-key RGB. Aluminum frame for durability.',
      features: [
        'Cherry MX Red switches',
        'Per-key RGB lighting',
        'Aluminum frame',
        'Detachable wrist rest',
        'Dedicated media keys',
        'Tournament switch',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71aFy7YKEHL._AC_SL1500_.jpg'
    },
    { 
      id: 302, 
      name: 'Razer Huntsman V3 Pro', 
      price: 850, 
      category: 'accessories', 
      subCategory: 'Keyboards', 
      desc: 'Analog optical switches TKL',
      description: 'Advanced analog optical switches with adjustable actuation. Premium gaming keyboard with 8000Hz polling.',
      features: [
        'Gen-2 Analog Optical',
        'Adjustable actuation 0.1-4.0mm',
        '8000Hz polling rate',
        'Doubleshot PBT keycaps',
        'Magnetic wrist rest',
        'Tenkeyless design',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61o2yABOY6L._AC_SL1500_.jpg'
    },
    { 
      id: 303, 
      name: 'Keychron Q1 Pro QMK/VIA', 
      price: 750, 
      category: 'accessories', 
      subCategory: 'Keyboards', 
      desc: 'Wireless custom mechanical',
      description: 'Fully customizable 75% mechanical keyboard. QMK/VIA support, gasket mount, and wireless connectivity.',
      features: [
        'QMK/VIA programmable',
        'Gasket mount design',
        'Wireless/wired modes',
        'Hot-swappable switches',
        'Double-gasket design',
        'OSA PBT keycaps',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61xQCUZN5bL._AC_SL1500_.jpg'
    },
    { 
      id: 304, 
      name: 'SteelSeries Apex Pro TKL', 
      price: 650, 
      category: 'accessories', 
      subCategory: 'Keyboards', 
      desc: 'Adjustable OmniPoint switches',
      description: 'Magnetic switches with adjustable actuation from 0.4mm-3.6mm. Premium esports keyboard.',
      features: [
        'OmniPoint 2.0 switches',
        'Adjustable actuation',
        'OLED Smart Display',
        'Aircraft-grade aluminum',
        'Per-key RGB',
        'Tenkeyless design',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71eQeCLP6mL._AC_SL1500_.jpg'
    },

    /* Mice */
    { 
      id: 305, 
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
      image: 'https://m.media-amazon.com/images/I/51oHpVuW8OL._AC_SL1500_.jpg'
    },
    { 
      id: 306, 
      name: 'Logitech G Pro X Superlight 2', 
      price: 450, 
      category: 'accessories', 
      subCategory: 'Mice', 
      desc: 'Ultra-light wireless 60g',
      description: 'Professional wireless gaming mouse with HERO 2 sensor. Ultra-lightweight at 60g for competitive gaming.',
      features: [
        'HERO 2 sensor 32K DPI',
        'Lightweight 60g',
        'LIGHTSPEED wireless',
        '95-hour battery',
        'PTFE feet',
        'Hybrid switches',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/51oHpVuW8OL._AC_SL1500_.jpg'
    },
    { 
      id: 307, 
      name: 'Finalmouse UltralightX', 
      price: 550, 
      category: 'accessories', 
      subCategory: 'Mice', 
      desc: 'Premium ultra-light 55g',
      description: 'Exclusive ultra-lightweight gaming mouse. Handcrafted for pro gamers with 55g weight.',
      features: [
        'PixArt 3395 sensor',
        'Ultra-light 55g',
        'Honeycomb shell',
        'PTFE skates',
        'Paracord cable',
        'Limited edition',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/51T6z0z3uBL._AC_SL1000_.jpg'
    },
    { 
      id: 308, 
      name: 'SteelSeries Aerox 5 Wireless', 
      price: 380, 
      category: 'accessories', 
      subCategory: 'Mice', 
      desc: '9-button ultra-light wireless',
      description: 'Multi-button wireless gaming mouse with water resistance. Perfect for MMO and MOBA games.',
      features: [
        'TrueMove Air sensor',
        '9 programmable buttons',
        'IP54 water resistance',
        '74g lightweight',
        '180-hour battery',
        'Quantum 2.0 wireless',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61IfQYOiGIL._AC_SL1500_.jpg'
    },
    { 
      id: 309, 
      name: 'Corsair Dark Core RGB Pro SE', 
      price: 320, 
      category: 'accessories', 
      subCategory: 'Mice', 
      desc: 'Wireless with Qi charging',
      description: 'Wireless gaming mouse with Qi wireless charging. Custom PixArt sensor with 18,000 DPI.',
      features: [
        'PixArt PMW3392 18K DPI',
        'Dual wireless modes',
        'Qi wireless charging',
        '8 programmable buttons',
        'Interchangeable grips',
        '142g weight',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71BVvQ3ZBYL._AC_SL1500_.jpg'
    },

    /* Headsets */
    { 
      id: 310, 
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
      image: 'https://m.media-amazon.com/images/I/61MR1Laql-L._AC_SL1500_.jpg'
    },
    { 
      id: 311, 
      name: 'HyperX Cloud Alpha Wireless', 
      price: 650, 
      category: 'accessories', 
      subCategory: 'Headsets', 
      desc: '300-hour battery wireless',
      description: 'Wireless gaming headset with record-breaking 300-hour battery. Dual Chamber Drivers for clear audio.',
      features: [
        '300-hour battery life',
        'DTS Headphone:X Spatial',
        'Dual Chamber Drivers',
        '50mm drivers',
        'Detachable mic',
        'Durable aluminum frame',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61FJNLr7kIL._AC_SL1500_.jpg'
    },
    { 
      id: 312, 
      name: 'Razer BlackShark V2 Pro', 
      price: 550, 
      category: 'accessories', 
      subCategory: 'Headsets', 
      desc: 'Esports wireless headset',
      description: 'Professional esports headset with THX Spatial Audio. Titanium-coated drivers for rich sound.',
      features: [
        'THX Spatial Audio',
        'TriForce Titanium 50mm',
        'HyperSpeed wireless',
        '70-hour battery',
        'Detachable mic',
        'Breathable memory foam',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61mR33iz5AL._AC_SL1500_.jpg'
    },
    { 
      id: 313, 
      name: 'Logitech G Pro X 2 Lightspeed', 
      price: 750, 
      category: 'accessories', 
      subCategory: 'Headsets', 
      desc: 'Premium wireless with Graphene',
      description: 'Premium wireless headset with 50mm Graphene drivers. Blue VO!CE technology for pro-grade comms.',
      features: [
        '50mm Graphene drivers',
        'Blue VO!CE microphone',
        'LIGHTSPEED wireless',
        '50-hour battery',
        'DTS Headphone:X 2.0',
        'Memory foam earpads',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61pfjTJ92AL._AC_SL1500_.jpg'
    },
    { 
      id: 314, 
      name: 'Audeze Maxwell Wireless', 
      price: 1200, 
      category: 'accessories', 
      subCategory: 'Headsets', 
      desc: 'Planar magnetic wireless',
      description: 'Audiophile-grade wireless gaming headset. 90mm planar magnetic drivers for unmatched sound quality.',
      features: [
        '90mm planar magnetic',
        'Dolby Atmos',
        '80-hour battery',
        'Dual wireless modes',
        'AI-powered noise cancelling',
        'Premium build quality',
        '3-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61PNDl7BgbL._AC_SL1500_.jpg'
    },

    /* Speakers */
    { 
      id: 315, 
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
      image: 'https://m.media-amazon.com/images/I/71xW3EYLgfL._AC_SL1500_.jpg'
    },
    { 
      id: 316, 
      name: 'Audioengine A2+ Wireless', 
      price: 950, 
      category: 'accessories', 
      subCategory: 'Speakers', 
      desc: 'Premium desktop speakers',
      description: 'High-quality desktop speakers with Bluetooth aptX. Built-in DAC for studio-quality sound.',
      features: [
        '60W peak power',
        'Bluetooth aptX',
        'Built-in 24-bit DAC',
        'Hand-built wood cabinets',
        'Multiple inputs',
        'Remote control',
        '3-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71qbIXnKgwL._AC_SL1500_.jpg'
    },
    { 
      id: 317, 
      name: 'Creative Pebble V3', 
      price: 150, 
      category: 'accessories', 
      subCategory: 'Speakers', 
      desc: 'Budget USB-C speakers',
      description: 'Affordable desktop speakers with USB-C audio. Minimalist design with good sound quality.',
      features: [
        'USB-C audio & power',
        '8W RMS',
        'Bluetooth 5.0',
        'Far-field drivers',
        'Gain control knob',
        'Compact design',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61tIjN5LGML._AC_SL1500_.jpg'
    },
    { 
      id: 318, 
      name: 'Edifier R1280DB Bookshelf', 
      price: 450, 
      category: 'accessories', 
      subCategory: 'Speakers', 
      desc: 'Powered bookshelf speakers',
      description: 'Versatile bookshelf speakers with multiple inputs. Great value for music and gaming.',
      features: [
        '42W RMS power',
        'Bluetooth 5.0',
        'Dual RCA inputs',
        'Optical & coaxial',
        'Remote control',
        'Bass/treble control',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71zJB-GxgbL._AC_SL1500_.jpg'
    },
    { 
      id: 319, 
      name: 'Razer Nommo V2 Pro', 
      price: 1850, 
      category: 'accessories', 
      subCategory: 'Speakers', 
      desc: 'Gaming speakers with subwoofer',
      description: 'Premium gaming speakers with dedicated subwoofer. THX Spatial Audio and Razer Chroma RGB.',
      features: [
        'THX Spatial Audio',
        'Dedicated subwoofer',
        'Razer Chroma RGB',
        'Wireless subwoofer',
        '3" full-range drivers',
        'Gaming/Music modes',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71JZrmU0SDL._AC_SL1500_.jpg'
    },

    /* Webcams */
    { 
      id: 320, 
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
      image: 'https://m.media-amazon.com/images/I/71dkPglLS5L._AC_SL1500_.jpg'
    },
    { 
      id: 321, 
      name: 'Logitech StreamCam', 
      price: 550, 
      category: 'accessories', 
      subCategory: 'Webcams', 
      desc: '1080p 60fps for streaming',
      description: 'Premium streaming webcam with 1080p 60fps. USB-C connectivity and AI-powered auto-framing.',
      features: [
        '1080p at 60fps',
        'USB-C connection',
        'AI-powered auto-framing',
        'Smart auto-focus',
        'Dual omnidirectional mics',
        'Portrait/landscape modes',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61AxJFL+ydL._AC_SL1500_.jpg'
    },
    { 
      id: 322, 
      name: 'Razer Kiyo Pro', 
      price: 650, 
      category: 'accessories', 
      subCategory: 'Webcams', 
      desc: 'Adaptive light sensor webcam',
      description: 'Professional webcam with adaptive light sensor. Superior low-light performance for streamers.',
      features: [
        '1080p at 60fps',
        'Adaptive light sensor',
        'Wide-angle lens',
        'HDR enabled',
        'Uncompressed video',
        'Adjustable FOV',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/51h6UbKqYAL._AC_SL1500_.jpg'
    },
    { 
      id: 323, 
      name: 'Elgato Facecam Pro', 
      price: 850, 
      category: 'accessories', 
      subCategory: 'Webcams', 
      desc: '4K 60fps professional webcam',
      description: 'Professional-grade 4K webcam. Sony STARVIS sensor for exceptional image quality.',
      features: [
        '4K at 60fps',
        'Sony STARVIS sensor',
        'f/2.0 aperture',
        'Fixed focus lens',
        'Uncompressed video',
        'Studio-grade optics',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61wQVz8+EnL._AC_SL1500_.jpg'
    },
    { 
      id: 171, 
      name: 'Logitech Brio 4K Pro', 
      price: 750, 
      category: 'accessories', 
      subCategory: 'Webcams', 
      desc: '4K HDR webcam',
      description: 'Professional 4K HDR webcam with Windows Hello. RightLight 3 for perfect exposure.',
      features: [
        '4K UHD at 30fps',
        'HDR support',
        'Windows Hello',
        '5x digital zoom',
        'RightLight 3 HDR',
        'Multiple FOV options',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61AisuY-mUL._AC_SL1500_.jpg'
    },

    /* Cables */
    { 
      id: 37, 
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
      image: 'https://m.media-amazon.com/images/I/61HN38KfOXL._AC_SL1500_.jpg'
    },
    { 
      id: 38, 
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
      image: 'https://m.media-amazon.com/images/I/61hRXF4QIuL._AC_SL1500_.jpg'
    },
    { 
      id: 172, 
      name: 'DisplayPort 1.4 Cable 2m', 
      price: 65, 
      category: 'accessories', 
      subCategory: 'Cables', 
      desc: '8K DisplayPort cable',
      description: 'Premium DisplayPort cable supporting 8K 60Hz and 4K 144Hz. Perfect for high-refresh gaming monitors.',
      features: [
        '2-meter length',
        'DisplayPort 1.4 certified',
        '8K at 60Hz',
        '4K at 144Hz',
        'HDR support',
        'Gold-plated connectors',
        'Lifetime warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61rnG8YRZIL._AC_SL1500_.jpg'
    },
    { 
      id: 173, 
      name: 'Thunderbolt 4 Cable 0.8m', 
      price: 120, 
      category: 'accessories', 
      subCategory: 'Cables', 
      desc: '40Gbps Thunderbolt 4',
      description: 'Certified Thunderbolt 4 cable with 40Gbps bandwidth. Supports 100W charging and dual 4K displays.',
      features: [
        '0.8-meter length',
        'Thunderbolt 4 certified',
        '40Gbps bandwidth',
        '100W power delivery',
        'Dual 4K display',
        'Durable braided',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61Z3xQ+SFBL._AC_SL1500_.jpg'
    },
    { 
      id: 174, 
      name: 'Ethernet Cat8 Cable 3m', 
      price: 45, 
      category: 'accessories', 
      subCategory: 'Cables', 
      desc: '40Gbps network cable',
      description: 'High-speed Cat8 ethernet cable. 40Gbps for gaming and streaming with zero lag.',
      features: [
        '3-meter length',
        'Cat8 S/FTP shielding',
        '40Gbps speed',
        '2000MHz bandwidth',
        'Gold-plated RJ45',
        'Weather-resistant',
        'Lifetime warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71MfzqP6uuL._AC_SL1500_.jpg'
    },

    /* USB Hubs */
    { 
      id: 39, 
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
      image: 'https://m.media-amazon.com/images/I/61jBR7mYaZL._AC_SL1500_.jpg'
    },
    { 
      id: 175, 
      name: 'Anker USB-C Hub 10-in-1', 
      price: 280, 
      category: 'accessories', 
      subCategory: 'USB Hubs', 
      desc: 'USB-C multiport adapter',
      description: 'Comprehensive USB-C hub with 10 ports. HDMI 4K, ethernet, SD card, and 100W pass-through charging.',
      features: [
        '10 ports total',
        '4K HDMI output',
        'Gigabit Ethernet',
        'SD/microSD slots',
        '100W PD pass-through',
        '3x USB 3.0',
        '18-month warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61sXTKMc0UL._AC_SL1500_.jpg'
    },
    { 
      id: 176, 
      name: 'CalDigit TS4 Thunderbolt 4 Dock', 
      price: 1450, 
      category: 'accessories', 
      subCategory: 'USB Hubs', 
      desc: 'Premium Thunderbolt 4 dock',
      description: 'Professional Thunderbolt 4 dock with 18 ports. 98W charging and dual 6K display support.',
      features: [
        '18 ports total',
        'Thunderbolt 4',
        '98W charging',
        'Dual 6K displays',
        '2.5Gb Ethernet',
        'SD/microSD UHS-II',
        '2-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61fpbJyW8iL._AC_SL1500_.jpg'
    },
    { 
      id: 177, 
      name: 'UGREEN USB 3.0 Hub 4-Port', 
      price: 65, 
      category: 'accessories', 
      subCategory: 'USB Hubs', 
      desc: 'Compact 4-port hub',
      description: 'Portable USB 3.0 hub for laptops. Aluminum design with 5Gbps data transfer.',
      features: [
        '4 USB 3.0 ports',
        '5Gbps per port',
        'Aluminum body',
        'Portable design',
        'LED indicators',
        'Plug and play',
        '18-month warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61M8av3HOZL._AC_SL1500_.jpg'
    },
    { 
      id: 178, 
      name: 'Sabrent USB 3.2 Hub with Power', 
      price: 180, 
      category: 'accessories', 
      subCategory: 'USB Hubs', 
      desc: '16-port powered hub',
      description: 'Industrial 16-port USB hub with individual switches. Perfect for charging stations and data transfer.',
      features: [
        '16 USB 3.2 ports',
        'Individual switches',
        '10Gbps data speed',
        '12V 8A power adapter',
        'Sync switch',
        'LED indicators',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71kj0eAWFzL._AC_SL1500_.jpg'
    },

    /* Cleaning Kits */
    { 
      id: 40, 
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
      image: 'https://m.media-amazon.com/images/I/81kFQHCs5wL._AC_SL1500_.jpg'
    },
    { 
      id: 179, 
      name: 'DataVac Electric Duster', 
      price: 380, 
      category: 'accessories', 
      subCategory: 'Cleaning Kits', 
      desc: 'Electric air duster',
      description: 'Powerful electric air duster replaces canned air. Eco-friendly and cost-effective for PC cleaning.',
      features: [
        '500W motor',
        'Reusable forever',
        'Variable speed',
        'Multiple nozzles',
        'ESD-safe design',
        '10-foot power cord',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71Lp1PY9PjL._AC_SL1500_.jpg'
    },
    { 
      id: 180, 
      name: 'iFixit Pro Tech Toolkit', 
      price: 320, 
      category: 'accessories', 
      subCategory: 'Cleaning Kits', 
      desc: 'Professional repair toolkit',
      description: 'Complete toolkit for PC building and maintenance. 64 precision bits and essential tools.',
      features: [
        '64 precision bits',
        'Anti-static wrist strap',
        'Tweezers & spudgers',
        'Suction cups',
        'Portable case',
        'Lifetime warranty bits',
        'Repair guides access'
      ],
      image: 'https://m.media-amazon.com/images/I/81WMOiY1t3L._AC_SL1500_.jpg'
    },
    { 
      id: 181, 
      name: 'OXO Deep Clean Brush Set', 
      price: 85, 
      category: 'accessories', 
      subCategory: 'Cleaning Kits', 
      desc: 'Electronics cleaning brushes',
      description: 'Professional brush set for deep cleaning PCs. Anti-static bristles safe for electronics.',
      features: [
        'Anti-static bristles',
        '3 brush sizes',
        'Keyboard cleaner',
        'Soft microfiber',
        'Non-scratch design',
        'Ergonomic handles',
        '1-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/71xWN2xoRJL._AC_SL1500_.jpg'
    },
    { 
      id: 182, 
      name: 'Screen Mom Screen Cleaner Kit', 
      price: 95, 
      category: 'accessories', 
      subCategory: 'Cleaning Kits', 
      desc: 'Screen cleaning solution',
      description: 'Premium screen cleaner for monitors and TVs. Alcohol-free formula with premium microfiber cloths.',
      features: [
        'Alcohol-free formula',
        '16oz spray bottle',
        '2 microfiber cloths',
        'Streak-free shine',
        'Safe for all screens',
        'Made in USA',
        '100% satisfaction'
      ],
      image: 'https://m.media-amazon.com/images/I/71Z8xh3QHQL._AC_SL1500_.jpg'
    },

    /* Thermal Paste */
    { 
      id: 41, 
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
      image: 'https://m.media-amazon.com/images/I/61YGmK+AqyL._AC_SL1500_.jpg'
    },
    { 
      id: 183, 
      name: 'Arctic MX-6 Thermal Paste', 
      price: 35, 
      category: 'accessories', 
      subCategory: 'Thermal Paste', 
      desc: 'High-performance thermal compound',
      description: 'Latest generation thermal paste with 16 W/mK conductivity. Easy application with 8-year durability.',
      features: [
        '16 W/mK conductivity',
        'Easy to apply',
        'Non-conductive',
        'Non-capacitive',
        '8-year durability',
        '4g tube',
        'Made in Germany'
      ],
      image: 'https://m.media-amazon.com/images/I/61eWBnJ8yUL._AC_SL1500_.jpg'
    },
    { 
      id: 184, 
      name: 'Noctua NT-H2 Thermal Paste', 
      price: 45, 
      category: 'accessories', 
      subCategory: 'Thermal Paste', 
      desc: 'Premium thermal compound',
      description: 'Premium-grade thermal compound from Noctua. Excellent performance and easy application.',
      features: [
        'Premium performance',
        'Easy to apply & clean',
        'Not electrically conductive',
        'Long-term stability',
        '3.5g tube',
        'NA-CW1 cleaning wipes',
        '6-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61h8E8rUxzL._AC_SL1200_.jpg'
    },
    { 
      id: 185, 
      name: 'Thermal Grizzly Kryonaut Extreme', 
      price: 85, 
      category: 'accessories', 
      subCategory: 'Thermal Paste', 
      desc: 'Extreme overclocker paste',
      description: 'Extreme performance thermal paste for overclockers. 14.2 W/mK conductivity for maximum cooling.',
      features: [
        '14.2 W/mK conductivity',
        'For extreme overclocking',
        'Non-conductive',
        'Very high viscosity',
        '2g syringe',
        'Temperature: -250°C to +350°C',
        'Professional grade'
      ],
      image: 'https://m.media-amazon.com/images/I/51TtOQhB8tL._AC_SL1200_.jpg'
    },
    { 
      id: 186, 
      name: 'Cooler Master MasterGel Maker', 
      price: 55, 
      category: 'accessories', 
      subCategory: 'Thermal Paste', 
      desc: 'Nano diamond thermal paste',
      description: 'Advanced thermal paste with nano diamond particles. 11 W/mK conductivity for excellent heat transfer.',
      features: [
        '11 W/mK conductivity',
        'Nano diamond particles',
        'Non-conductive',
        'Low viscosity',
        '4g tube',
        'Easy application',
        '3-year warranty'
      ],
      image: 'https://m.media-amazon.com/images/I/61S2VbfHsNL._AC_SL1280_.jpg'
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
