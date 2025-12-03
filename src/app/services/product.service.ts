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
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/763a47f348ec493a6f53fffe82daca09.1600.jpg'
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
      image: 'https://cdna.pcpartpicker.com/static/forever/images/product/814dd4fff0d20c7503e54641a2c02947.1600.jpg'
    },
    {
        id: 3,
        name: 'MSI GeForce RTX 3060 VENTUS 2X 12G',
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
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/c740684e2cd2339bf845f7493711bcb7.1600.jpg'
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
        image: 'https://cdna.pcpartpicker.com/static/forever/images/product/43191ac360269737064e20b57d60c9b6.1600.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61I3PqGTbCL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/51Q-s93U5EL._AC_SL1024_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/51REPoZGURL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/51xZ7bK9ELL._AC_SL1080_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61d35FMgorL._AC_SL1280_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61nC17r8QkL._AC_SL1280_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61N071G+sPL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61g0E9griYL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/51aRQjIOAJL._AC_SL1280_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/51A+coZLYOL._AC_SL1280_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61cXzKLmhNL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/81d7w6ycfbL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/81x+JsB+jJL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71hK8fa7taL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71bJnT7BukL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/81Q2+VdAY5L._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71r0VO2OVGL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/81yVBPejHpL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71cVoro1hPL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71R3wCVGRtL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71W3CtL6LiL._AC_SL1500_.jpg'
    },

    /* Motherboards */
    { 
      id: 103, 
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
      image: 'https://m.media-amazon.com/images/I/81vqF9E8YOL._AC_SL1500_.jpg'
    },
    { 
      id: 104, 
      name: 'MSI MAG B660 TOMAHAWK WIFI', 
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
      image: 'https://m.media-amazon.com/images/I/81xPGOO7+vL._AC_SL1500_.jpg'
    },
    { 
      id: 105, 
      name: 'Gigabyte X670 AORUS Elite AX', 
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
      image: 'https://m.media-amazon.com/images/I/81fW7RVVk2L._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/91qqLB8FoOL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/81KH3zVi7aL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71VznRt4zJL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61k3yKq8fUL._AC_SL1200_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71u+-S8EwWL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61VEzr9vkML._AC_SL1000_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61qJ-bBCekL._AC_SL1280_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71Iu82V1BbL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/61bH8gvGvwL._AC_SL1200_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71i5WTKD5NL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71xzJwzETsL._AC_SL1500_.jpg'
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
      image: 'https://m.media-amazon.com/images/I/71VXe6KWLQL._AC_SL1500_.jpg'
    },


    // Monitors

    /* Gaming Monitors */
    { 
      id: 118, 
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
      image: 'https://m.media-amazon.com/images/I/71pAr9E+sIL._AC_SL1500_.jpg'
    },
    { 
      id: 119, 
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
      image: 'https://m.media-amazon.com/images/I/81VjzXzCjkL._AC_SL1500_.jpg'
    },
    { 
      id: 120, 
      name: 'LG UltraGear 27" 180Hz', 
      price: 980, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'QHD 180Hz with HDR400',
      description: 'High-performance gaming monitor with 180Hz refresh rate, 1ms response, and HDR400. Nano IPS for vibrant colors.',
      features: [
        '27-inch QHD (2560x1440)',
        '180Hz refresh rate',
        '1ms GTG response',
        'Nano IPS panel',
        'HDR400',
        'FreeSync & G-Sync compatible',
        'DCI-P3 98% color gamut'
      ],
      image: 'https://m.media-amazon.com/images/I/81qZZcCqGEL._AC_SL1500_.jpg'
    },
    { 
      id: 121, 
      name: 'AOC C27G2Z 27" 240Hz Curved', 
      price: 750, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'Curved 240Hz for competitive gaming',
      description: 'Budget-friendly curved gaming monitor with 240Hz refresh rate. Perfect for competitive FPS gaming.',
      features: [
        '27-inch Full HD curved',
        '240Hz refresh rate',
        '0.5ms response time',
        '1500R curvature',
        'FreeSync Premium',
        'Frameless design'
      ],
      image: 'https://m.media-amazon.com/images/I/81ZYOGqCxOL._AC_SL1500_.jpg'
    },
    { 
      id: 122, 
      name: 'BenQ ZOWIE XL2566K 24.5" 360Hz', 
      price: 1850, 
      category: 'monitors', 
      subCategory: 'Gaming Monitors', 
      desc: 'Esports 360Hz TN panel',
      description: 'Professional esports monitor with 360Hz refresh rate. Used by pro gamers worldwide for competitive advantage.',
      features: [
        '24.5-inch Full HD',
        '360Hz refresh rate',
        '0.5ms response',
        'TN panel',
        'DyAc+ technology',
        'XL Setting to Share',
        'Esports-grade'
      ],
      image: 'https://m.media-amazon.com/images/I/61zrrX2PQPL._AC_SL1500_.jpg'
    },

    /* 4K Monitors */
    { 
      id: 123, 
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
      image: 'https://m.media-amazon.com/images/I/71MzXMhha7L._AC_SL1500_.jpg'
    },
    { 
      id: 124, 
      name: 'Samsung Odyssey Neo G7 32" 4K 165Hz', 
      price: 2800, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K 165Hz curved gaming',
      description: 'Premium 4K curved gaming monitor with Quantum Mini LED, 165Hz, and 1ms response. Ultimate gaming experience.',
      features: [
        '32-inch 4K UHD curved',
        '165Hz refresh rate',
        'Quantum Mini LED',
        '1000R curvature',
        'HDR600',
        '1ms response time',
        'FreeSync Premium Pro'
      ],
      image: 'https://m.media-amazon.com/images/I/71nG2vpC9UL._AC_SL1500_.jpg'
    },
    { 
      id: 125, 
      name: 'ASUS TUF Gaming 28" 4K 144Hz', 
      price: 1450, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K 144Hz for gaming',
      description: '4K gaming monitor with 144Hz refresh rate, HDMI 2.1, and G-Sync compatibility. Perfect for next-gen consoles.',
      features: [
        '28-inch 4K UHD',
        '144Hz refresh rate',
        'HDMI 2.1',
        'G-Sync compatible',
        'DisplayHDR 400',
        '1ms MPRT',
        'Shadow Boost'
      ],
      image: 'https://m.media-amazon.com/images/I/81VLEkwsCHL._AC_SL1500_.jpg'
    },
    { 
      id: 126, 
      name: 'Dell S2722DC 27" 4K USB-C', 
      price: 1350, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K IPS with USB-C 65W',
      description: '4K monitor with USB-C connectivity and 65W power delivery. Perfect for laptops and productivity.',
      features: [
        '27-inch 4K UHD',
        'IPS panel',
        'USB-C with 65W PD',
        '99% sRGB',
        'Built-in speakers',
        'VESA mount ready',
        'ComfortView Plus'
      ],
      image: 'https://m.media-amazon.com/images/I/71iSTxqTPBL._AC_SL1500_.jpg'
    },
    { 
      id: 127, 
      name: 'BenQ SW270C 27" 4K for Photo Editing', 
      price: 1950, 
      category: 'monitors', 
      subCategory: '4K Monitors', 
      desc: '4K color-accurate for creators',
      description: 'Professional 4K monitor with 99% Adobe RGB. Hardware calibrated for photographers and designers.',
      features: [
        '27-inch 4K UHD',
        '99% Adobe RGB',
        'Factory calibrated',
        'IPS panel',
        'USB-C connectivity',
        'Hardware calibration',
        'Hotkey Puck included'
      ],
      image: 'https://m.media-amazon.com/images/I/61Ug90vIcuL._AC_SL1080_.jpg'
    },

    /* Ultrawide Monitors */
    { 
      id: 128, 
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
      image: 'https://m.media-amazon.com/images/I/71A3þ3kFsL._AC_SL1500_.jpg'
    },
    { 
      id: 129, 
      name: 'LG 34" UltraWide QHD 160Hz', 
      price: 1650, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: '34" curved 160Hz ultrawide',
      description: 'Ultrawide gaming monitor with 160Hz, Nano IPS, and HDR400. Perfect for immersive gaming and productivity.',
      features: [
        '34-inch ultrawide QHD',
        '160Hz refresh rate',
        'Nano IPS panel',
        'HDR400',
        'DCI-P3 95%',
        'FreeSync Premium',
        '1ms response time'
      ],
      image: 'https://m.media-amazon.com/images/I/71bW+NaHDSL._AC_SL1500_.jpg'
    },
    { 
      id: 130, 
      name: 'Dell Alienware AW3423DWF 34" OLED', 
      price: 3500, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: '34" QD-OLED ultrawide 165Hz',
      description: 'Revolutionary QD-OLED ultrawide with infinite contrast, 165Hz, and 0.1ms response. Ultimate gaming experience.',
      features: [
        '34-inch ultrawide QHD',
        'QD-OLED panel',
        '165Hz refresh rate',
        '0.1ms response time',
        'Infinite contrast ratio',
        'HDR True Black 400',
        'FreeSync Premium Pro'
      ],
      image: 'https://m.media-amazon.com/images/I/71t0u4ppk5L._AC_SL1500_.jpg'
    },
    { 
      id: 131, 
      name: 'Samsung Odyssey G9 49" Super Ultrawide', 
      price: 4200, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: '49" dual QHD 240Hz curved',
      description: 'Extreme 49" super ultrawide with dual QHD resolution, 240Hz, and 1000R curvature. Like dual monitors in one.',
      features: [
        '49-inch super ultrawide',
        'Dual QHD 5120x1440',
        '240Hz refresh rate',
        '1000R curvature',
        'Quantum Mini LED',
        'HDR1000',
        'G-Sync compatible'
      ],
      image: 'https://m.media-amazon.com/images/I/81mNw9t86QL._AC_SL1500_.jpg'
    },
    { 
      id: 132, 
      name: 'AOC CU34G2X 34" Curved 144Hz', 
      price: 1250, 
      category: 'monitors', 
      subCategory: 'Ultrawide Monitors', 
      desc: 'Budget ultrawide 144Hz',
      description: 'Affordable 34" ultrawide with 144Hz and 1500R curvature. Great value for immersive gaming.',
      features: [
        '34-inch ultrawide QHD',
        '144Hz refresh rate',
        '1500R curvature',
        'VA panel',
        'FreeSync',
        '1ms MPRT',
        'Flicker-free'
      ],
      image: 'https://m.media-amazon.com/images/I/71xhzPyIoEL._AC_SL1500_.jpg'
    },

    /* Professional Monitors */
    { 
      id: 133, 
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
      image: 'https://m.media-amazon.com/images/I/71V6oz0UoOL._AC_SL1500_.jpg'
    },
    { 
      id: 134, 
      name: 'BenQ PD3220U 32" 4K Designer Monitor', 
      price: 2100, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: '32" 4K for design professionals',
      description: 'Professional 32" 4K monitor with Thunderbolt 3, 95% P3, and hardware calibration. Perfect for designers.',
      features: [
        '32-inch 4K UHD',
        'Thunderbolt 3',
        'DCI-P3 95%',
        'Hardware calibration',
        'KVM switch',
        'Hotkey Puck G2',
        'IPS panel'
      ],
      image: 'https://m.media-amazon.com/images/I/71qZQ9VUmHL._AC_SL1500_.jpg'
    },
    { 
      id: 134, 
      name: 'ASUS ProArt PA279CV 27" 4K', 
      price: 1450, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: '4K ProArt for creators',
      description: 'ProArt display with 100% sRGB/Rec. 709 coverage. Calman Verified for color accuracy.',
      features: [
        '27-inch 4K UHD',
        '100% sRGB & Rec. 709',
        'Factory calibrated',
        'USB-C with 65W PD',
        'Calman Verified',
        'ProArt Preset modes',
        'Ergonomic stand'
      ],
      image: 'https://m.media-amazon.com/images/I/71nSZ+iO1jL._AC_SL1500_.jpg'
    },
    { 
      id: 135, 
      name: 'LG 27UP850-W 27" 4K USB-C', 
      price: 1550, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: '4K with USB-C hub',
      description: '4K UHD monitor with USB-C hub, 99% sRGB, and HDR400. Ideal for professionals and multitasking.',
      features: [
        '27-inch 4K UHD',
        'IPS panel',
        'USB-C 96W PD',
        '99% sRGB',
        'HDR400',
        'Height adjustable',
        'OnScreen Control'
      ],
      image: 'https://m.media-amazon.com/images/I/71mEv-KhJ7L._AC_SL1500_.jpg'
    },
    { 
      id: 136, 
      name: 'HP Z27k G3 27" 4K USB-C', 
      price: 1800, 
      category: 'monitors', 
      subCategory: 'Professional Monitors', 
      desc: 'Enterprise 4K with KVM',
      description: 'Enterprise-grade 4K monitor with USB-C, KVM switch, and security features. For professionals.',
      features: [
        '27-inch 4K UHD',
        'IPS Black panel',
        'USB-C 100W PD',
        'Built-in KVM',
        '99% sRGB',
        'HP Eye Ease',
        'Security lock slot'
      ],
      image: 'https://m.media-amazon.com/images/I/61YA0qPWpqL._AC_SL1500_.jpg'
    },


    // Chairs

    /* Gaming Chairs */
    { 
      id: 137, 
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
      image: 'https://m.media-amazon.com/images/I/61A8ug4YIPL._AC_SL1500_.jpg'
    },
    { 
      id: 138, 
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
      image: 'https://m.media-amazon.com/images/I/61GGWM8r+kL._AC_SL1500_.jpg'
    },
    { 
      id: 139, 
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
      image: 'https://m.media-amazon.com/images/I/71cIxGZ4qbL._AC_SL1500_.jpg'
    },
    { 
      id: 140, 
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
      image: 'https://m.media-amazon.com/images/I/71rnvB-FuVL._AC_SL1500_.jpg'
    },
    { 
      id: 141, 
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
      image: 'https://m.media-amazon.com/images/I/61p7b7-M9NL._AC_SL1500_.jpg'
    },

    /* Office Chairs */
    { 
      id: 142, 
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
      image: 'https://m.media-amazon.com/images/I/61cR-o6NuuL._AC_SL1500_.jpg'
    },
    { 
      id: 143, 
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
      image: 'https://m.media-amazon.com/images/I/61gGQmT8bTL._AC_SL1500_.jpg'
    },
    { 
      id: 144, 
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
      image: 'https://m.media-amazon.com/images/I/61Q8wZiPAmL._AC_SL1500_.jpg'
    },
    { 
      id: 145, 
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
      image: 'https://m.media-amazon.com/images/I/51dWWy5bILL._AC_SL1000_.jpg'
    },
    { 
      id: 146, 
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
      image: 'https://m.media-amazon.com/images/I/71hGk7V2jpL._AC_SL1500_.jpg'
    },

    /* Ergonomic Chairs */
    { 
      id: 31, 
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
      image: 'https://m.media-amazon.com/images/I/61sIdEKTdHL._AC_SL1500_.jpg'
    },
    { 
      id: 147, 
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
      image: 'https://m.media-amazon.com/images/I/61cR-o6NuuL._AC_SL1500_.jpg'
    },
    { 
      id: 148, 
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
      image: 'https://m.media-amazon.com/images/I/61sIdEKTdHL._AC_SL1500_.jpg'
    },
    { 
      id: 149, 
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
      image: 'https://m.media-amazon.com/images/I/61OqBTcFXcL._AC_SL1500_.jpg'
    },
    { 
      id: 150, 
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
      image: 'https://m.media-amazon.com/images/I/61iP8OW7B0L._AC_SL1500_.jpg'
    },


    // Accessories

    /* Keyboards */
    { 
      id: 32, 
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
      id: 151, 
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
      id: 152, 
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
      id: 153, 
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
      id: 154, 
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
      id: 33, 
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
      id: 155, 
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
      id: 156, 
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
      id: 157, 
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
      id: 158, 
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
      id: 159, 
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
      id: 160, 
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
      id: 161, 
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
      id: 162, 
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
      id: 163, 
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
      id: 35, 
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
      id: 164, 
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
      id: 165, 
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
      id: 166, 
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
      id: 167, 
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
      id: 36, 
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
      id: 168, 
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
      id: 169, 
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
      id: 170, 
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
