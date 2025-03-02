import { MotherBoard } from "./types/motherBoard";
import { PowerSource } from "./types/powerSource";
import { GPU } from "./types/gpu";


// Opciones del menu - Categorías
/*
const categorias = [
    {
        main: 'Tarjetas madre',
        sub: [
            "Asus",
            "MSI",
            "Gigabyte",
            "Asrock",
        ]
    },
    {
        main: 'Fuentes de poder',
        sub: [
            "EVGA",
            "MSI",
            "Teros",
            "Halion",
            "CoolerMaster",
        ]
    },
    {
        main: 'Tarjetas de video',
        sub: [
            "Asus",
            "NVIDIA",
            "Sapphire",
            "Gigabyte",
            "AMD",
        ]
    },
    {
        main: 'Memorias Ram',
        sub: [
             "T-Force",
             "XPG",
             "Hyper Fury",
        ]
    },
    {
        main: 'Procesadores',
        sub: [
            'AMD',
            'Intel'
        ]
    },

]
*/


/*
    Agregar en la base de datos 50 - 100 productos
    10 - 15 productos de cada categoría
*/


export const TarjetasMadre = [
    new MotherBoard({
        title: 'TUF GAMING Z690-PLUS WIFI D4',
        fullTitle: 'Tarjeta madre para juegos Intel® Z690 (LGA 1700) ATX, 15 fases de poder DrMOS, PCIe® 5.0, memoria DDR4, cuatro puertos M.2, WiFi 6 y Ethernet Intel de 2.5Gb, HDMI®, DisplayPort™, USB 3.2 Gen 2x2 Type-C®, USB 3.2 Gen 2 Type C frontal, SATA 6 Gbps, Thunderbolt™ 4 e iluminación Aura Sync RGB',
        description: [
            "Socket Intel® LGA 1700: Listo para procesadores Intel® de 14a, 13a y 12a Gen.",
            "Solución de energía mejorada: 14 + 1 fases de poder DrMOS, PCB de seis capas, conectores ProCool, chokes de aleación y capacitores duraderos para una entrega de energía estable.",
            'Conectividad de próxima generación: PCIe® 5.0, USB 3.2 Gen2x2 Type-C®, USB 3.2 Gen 2 Type-C frontal y Thunderbolt™ 4.',
            "Hecha para juegos en línea: WiFi 6, Intel 2.5 Gb Ethernet y TUF LANGuard.",
            'Cancelación de ruido de IA bidireccional: Reduce el ruido de fondo del micrófono y la salida de audio para una comunicación nítida en juegos o videoconferencias.',
            "Refrigeración completa: Disipador de calor VRM ampliado, disipador de calor PCH sin ventilador, disipadores de calor M.2, puertos de ventilador híbridos y utilidad Fan Xpert 4 en Armory Crate.",
            'Efectos RGB Aura deslumbrantes: Elegante diseño de iluminación de borde y PCH, puertos RGB direccionables y soporte para tiras RGB.'
        ],
        price: 89,
        images : [
            'https://i.postimg.cc/7YVcf2kh/0.webp',
            'https://i.postimg.cc/Qxsw8qvv/1.webp',
            'https://i.postimg.cc/h4VNRYZ9/2.webp',
            'https://i.postimg.cc/Fzb6bfkP/3.webp',
            'https://i.postimg.cc/g227R2zD/4.webp'
        ],
        brand: 'ASUS',
        offer: true,
        discount: 50
    }),
    
    new MotherBoard({
        title: 'Prime Z690-A',
        fullTitle: 'Tarjeta madre Intel® Z690 (LGA 1700) ATX con PCIe® 5.0, DDR5, cuatro puertos M.2, 16 + 1 fases de poder DrMOS, DDR5, HDMI®, DisplayPort™, Ethernet de 2.5 Gb, USB 3.2 Gen 2x2 Type-C® , USB 3.2 Gen 2 Type-C® frontal, Thunderbolt™ 4 e iluminación Aura Sync RGB',
        description: [
            'Socket Intel® LGA 1700: Listo para procesadores Intel® de 14a, 13a y 12a generación.',
            'Solución de energía mejorada: 16 + 1 fases de poder DrMOS, puertos ProCool, chokes de aleación y capacitores duraderos para una entrega de energía estable.',
            'AI Overclocking: Optimiza el rendimiento según la CPU y las cargas más frías para lograr resultados que se acercan mucho al ajuste manual realizado por expertos.',
            'AI Cooling: Administra y controla todos los ventiladores de la tarjeta madre, optimizando automáticamente la configuración en función de la carga y la temperatura actuales del sistema.',
            'Two-Way AI Noise Cancelation: Reduce el ruido de fondo del micrófono y la salida de audio para una comunicación nítida en juegos o videoconferencias.',
            'Refrigeración completa: Grandes disipadores de calor VRM, disipadores de calor M.2, placa posterior M.2 con Q-Latch, puertos de ventilador híbridos y Fan Xpert 4.',
            'Conectividad de próxima generación: Memoria DDR5, PCIe® 5.0, Intel 2.5 Gb Ethernet, USB 3.2 Gen2x2 Type-C®, panel frontal USB 3.2 Gen 2 Type-C®, Thunderbolt™ 4, 4 M.2 PCIe®4.0.'
        ],
        images: [
            'https://i.postimg.cc/wxkFVYbb/4.webp',
            "https://i.postimg.cc/vTXzH5Vd/0.webp",
"https://i.postimg.cc/yx7jHLWP/1.webp",
"https://i.postimg.cc/tTQDrqj8/2.webp",
"https://i.postimg.cc/50BgTh9y/3.webp"
        ],
        brand: 'ASUS',
        price: 90.5

    }),

    new MotherBoard({
        title: 'ProArt Z690-CREATOR WIFI',
        fullTitle: 'Tarjeta madre Intel® Z690 LGA 1700 ATX diseñada para creadores, con PCIe® 5.0, compatibilidad con DDR5, Thunderbolt™ 4, Ethernet de 10 Gb y 2.5 Gb, WiFi 6E, cuatro puertos PCIe 4.0 M.2 con disipadores de calor, más un puerto de frontal USB 3.2 Gen 2x2 con soporte Quick Charge 4+',
        description:[
            'Socket Intel® LGA 1700: Listo para procesadores Intel® de 14a, 13a y 12a Gen.',
            'Conectividad preparada para el futuro: Dos Thunderbolt™ 4 puertos® tipo C, 10 Gb& Ethernet integrado de 2.5 Gb, WiFi 6E, cuatro ranuras PCIe® 4.0 M.2 y un puerto de panel frontal USB 3.2 Gen 2x2 con Quick Charge 4+.',
            'Rendimiento de próxima generación: 16 + 1 fases de poder clasificadas para 70 amperios, compatible con PCIe 5.0 y un aumento de velocidad DDR5.',
            'Optimización inteligente: Software y firmware exclusivos de ASUS que simplifican la configuración y mejoran el rendimiento: AI Overclocking, AI Cooling, CreationFirst y Two-Way AI Noise-Cancelation.',
            'Diseño térmico integral: Un VRM masivo y un disipador de calor de chipset, disipadores de calor de aluminio M.2, siete puertos de ventilador PWM de 4 pines y un puerto de bomba AIO.',
            'Gestión de seguridad avanzada: Gestión de puertos USB, listas negras de software y controles de activación / desactivación de Regedit a través de ASUS Control Center Express.',
            'Estabilidad confiable: Probado para un funcionamiento 24 horas al día, 7 días a la semana, validado para una amplia compatibilidad y equipado con SafeSlot y SafeDIMM para una mayor durabilidad.'
        ],
        images: [
            'https://i.postimg.cc/brfM20rD/4.webp',
            'https://i.postimg.cc/9M7KMgmH/0.webp',
            'https://i.postimg.cc/jj9BRYrh/1.webp',
            'https://i.postimg.cc/wB3SKTnv/2.webp',
            'https://i.postimg.cc/0yVLHJWF/3.webp'
        ],
        brand: 'ASUS',
        price: 90
    }),

    new MotherBoard({
        title: 'PRIME B550M-A (WI-FI)/CSM',
        fullTitle: 'Tarjeta madre micro ATX AMD B550 (Ryzen AM4) con doble M.2, PCIe 4.0, Intel® WiFi 6, Ethernet de 1 Gb, HDMI / D-Sub / DVI, SATA 6 Gbps, USB 3.2 Gen 2 Tipo A y puertos Aura Sync RGB',
        description: [
            'Socket AMD AM4: Listo para Procesadores de escritorio Ryzen™ 5000 Series / 4000 G-Series / 3000 Series.',
            'Refrigeración completa: Disipador de calor VRM, disipador de calor PCH y Fan Xpert 2+.',
            'Conectividad ultrarrápida: Dual M.2, PCIe 4.0, Intel® WiFi 6, Ethernet de 1 Gb, USB 3.2 Gen 2 tipo A.',
            'Aura Sync RGB: Puerto Gen 2 direccionable integrado para tiras de LED RGB, que se sincroniza fácilmente con hardware compatible con Aura Sync.',
        ],
        brand: 'ASUS',
        price: 100,
        images: [
            'https://i.postimg.cc/Vk48Qh67/3.png',
            'https://i.postimg.cc/bvBfd21k/0.png',
            'https://i.postimg.cc/Gp21cjTb/1.png',
            'https://i.postimg.cc/MpzSLwWM/2.png',
            'https://i.postimg.cc/FRk5Ssxq/4.png'
        ]
    }),

    new MotherBoard({
        title: 'PRO Z790-A MAX WIFI',
        fullTitle: 'PRO Z790-A MAX WIFI',
        description: [
            'Support Intel® Core™ 14th/ 13th/ 12th Gen Processors, Intel® Pentium® Gold and Celeron® Processors LGA 1700',
            'Chipset INTEL Z90',
            "4x DDR5 UDIMM, Maximum Memory Capacity 256GB Memory Support 7800+(OC)/ 7600(OC)/ 7400(OC)/ 7200(OC)/ 7000(OC)/ 6800(OC)/ 6600(OC)/ 6400(OC)/ 6200(OC)/ 6000(OC)/ 5800(OC)/ 5600(JEDEC)/ 5400(JEDEC)/ 5200(JEDEC)/ 5000(JEDEC)/ 4800(JEDEC) MHz",
            '1x HDMI™ Support HDMI™ 2.1 with HDR, maximum resolution of 4K 60Hz* 1x DisplayPort Support DP 1.4, maximum resolution of 8K 60Hz*',
            '3x PCI-E x16 slot (Qty) 1x PCI-E x1 slot (Qty) PCI_E1 Gen PCIe 5.0 supports up to x16 (From CPU) PCI_E2 Gen PCIe 3.0 supports up to x1 (From Chipset) PCI_E3 Gen PCIe 4.0 supports up to x4 (From Chipset) PCI_E4 Gen PCIe 3.0 supports up to x1 (From Chipset)'
        ],
        images: [
            'https://i.postimg.cc/287pht4z/4.png',
            'https://i.postimg.cc/QCc264wJ/0.png',
            'https://i.postimg.cc/BQ0983PY/2.png',
            'https://i.postimg.cc/xjHVT88N/3.png',
            'https://i.postimg.cc/5yccSd7t/1.png'
        ],
        brand: 'MSI',
        price: 90

    }),

    new MotherBoard({
        title: 'B560M PRO-VDH',
        fullTitle: 'B560M PRO-VDH',
        images: [
            'https://i.postimg.cc/8P9pX97L/0.png',
            'https://i.postimg.cc/zfSqBf0k/1.png',
            'https://i.postimg.cc/nhmHy2mg/2.png',
            'https://i.postimg.cc/BvGq4Fc6/3.png',
            'https://i.postimg.cc/Kz0FPHXk/4.png'
        ],
        description: [
            '5066(OC) / 5000(OC) / 4800(OC) / 4600(OC) / 4533(OC) / 4400(OC) / 4266(OC) / 4000(OC) / 3866(OC) / 3733(OC) / 3600(OC) / 3466(OC) / 3333(OC) / 3200(JEDCE & POR) / 3000(JEDCE & POR) / 2933(JEDCE & POR) / 2800(JEDCE & POR) / 2666(JEDCE & POR) / 2400(JEDCE & POR) / 2133(JEDCE & POR) MHz',
            'CHIPSET Intel® B560 Chipset',
            'CPU (SOPORTE MÁXIMO) i9',
            '2 PUERTOS M.2',
            '1x Realtek® 8125B 2.5Gbps LAN controller'
        ],
        price: 100,
        brand: 'MSI'
    }),

    new MotherBoard({
        title: 'MPG Z590 GAMING PLUS',
        fullTitle: 'MPG Z590 GAMING PLUS',
        images: [
            'https://i.postimg.cc/N0JBTnvy/0.png',
            'https://i.postimg.cc/zGNz1Wkf/1.png',
            'https://i.postimg.cc/VkFYs67W/2.png',
            'https://i.postimg.cc/mr2TPsJf/3.png',
            'https://i.postimg.cc/FRYmxxhT/4.png'
        ],
        description: [
            '5333(OC)/ 5200(OC)/ 5000(OC)/ 4800(OC)/ 4600(OC)/ 4533(OC)/ 4400(OC)/ 4300(OC)/ 4266(OC)/ 4200(OC)/ 4133(OC)/ 4000(OC)/ 3866(OC)/ 3733(OC)/ 3600(OC)/ 3466(OC)/ 3400(OC)/ 3333(OC)/ 3300(OC)/ 3200(OC)/ 3000(OC)/ 2933(JEDEC)/ 2666(JEDEC)/ 2400(JEDEC)/ 2133(JEDEC) MHz',
            'SOCKET 1200',
            'CPU (SOPORTE MÁXIMO) i9',
            '3 PUERTO M.2',
            'PCI-EX16 3'
        ],
        price: 100,
        brand: 'MSI'
    }),

    new MotherBoard({
        title: 'MPG X870E CARBON WIFI',
        fullTitle: 'MPG X870E CARBON WIFI',
        images: [
            'https://i.postimg.cc/G90fGFpT/0.png',
            'https://i.postimg.cc/v8p83Cgf/1.png',
            'https://i.postimg.cc/QNBxgjtj/2.png',
            'https://i.postimg.cc/FzkqYWhQ/3.png',
            'https://i.postimg.cc/ncBF5TB5/4.png'
        ],
        description: [
            'VGA CARD SUPPORT Max 400mm / 15.75 inch',
            'CPU COOLER SUPPORT Max 170mm / 6.69 inch',
            'CHIPSET Intel® Z690 Chipset',
            '4x DDR5 memory slots, support up to 128GB Supports 1R 4800 MHz (by JEDEC & POR) Max. overclocking frequency: 1DPC 1R Max speed up to 6666+ MHz 1DPC 2R Max speed up to 5600+ MHz > 6000+ MHz 2DPC 1R Max speed up to 4000+ MHz > 5600+ MHz 2DPC 2R Max speed up to 4000+ MHz > 5600+ MHz Supports Intel® XMP 3.0 OC Supports Dual Controller Dual-Channel mode Supports non-ECC, un-buffered memory',
        ],
        price: 100,
        brand: 'MSI'
    }),

    new MotherBoard({
        title: 'Z890 AORUS PRO ICE',
        fullTitle: 'Z890 AORUS PRO ICE',
        images: [
            'https://i.postimg.cc/mkr9jJt0/0.webp',
            "https://i.postimg.cc/Pf6YJX7h/1.webp",
            "https://i.postimg.cc/VLdMCyyt/2.webp",
            "https://i.postimg.cc/wMbmG2N3/3.webp",
            "https://i.postimg.cc/ZKRPxBNC/4.webp"
        ],
        description: [
            'Supports Intel® Core™ Ultra processors (Series 2)',
            'AORUS AI SNATCH : Auto-Overclocking Software by AI models',
            'Premium Compatibility : 4*DDR5 with XMP Memory Module Support',
            'EZ-Latch Plus : PCIe and M.2 slots with Quick Release & Screwless Design',
            'PCIe UD Slot X : PCIe 5.0 x16 slot with 10X strength for graphics card',
            'Ultra-Fast Storage : 5*M.2 slots, including 1* PCIe 5.0 x4'
        ],
        price: 100,
        brand: 'Gigabyte'
    }),

    new MotherBoard({
        title: 'Z890 AORUS XTREME AI TOP',
        fullTitle: 'Z890 AORUS XTREME AI TOP',
        images: [
            "https://i.postimg.cc/152F0WPj/0.webp",
            "https://i.postimg.cc/43ThqmYv/1.webp",
            "https://i.postimg.cc/7LMTkwzF/2.webp",
            "https://i.postimg.cc/4xc9WzxN/3.webp",
            "https://i.postimg.cc/Qt8KNwkH/4.webp"
        ],
        description: [
            'Ultimate Scalability​ : 2*PCIe 5.0 x16 slots for Multi-GPU and 4*PCIe 5.0/4.0 x4 M.2 slots',
            'Next-gen Connectivity: Dual THUNDERBOLT™ 5 and THUNDERBOLT™ 4 Type-C with DP-Alt',
            'Supports Intel® Core™ Ultra processors (Series 2)',
            'EZ-Latch Plus: PCIe and M.2 slots with Quick Release & Screwless Design',
            'Premium Compatibility: 4*DDR5 with XMP Memory Module Support'
        ],
        price: 100,
        brand: 'Gigabyte'
    }),

    new MotherBoard({
        title: 'Z890 AORUS MASTER',
        fullTitle: 'Z890 AORUS MASTER',
        images: [
            "https://i.postimg.cc/SNv6TSLV/0.webp",
            "https://i.postimg.cc/HLGQm6hy/1.webp",
            "https://i.postimg.cc/0Np7y7TH/2.webp",
            "https://i.postimg.cc/3x0gzsnh/3.webp",
            "https://i.postimg.cc/NMBm95YG/4.webp"
        ],
        description: [
            'AI Perfdrive : Provides optimal and customized BIOS preset profile for users',
            'Premium Compatibility : 4*DDR5 with XMP Memory Module Support',
            'EZ-Latch Plus : PCIe and M.2 slots with Quick Release & Screwless Design',
            'Ultra-Fast Storage : 5*M.2 slots, including 2* PCIe 5.0 x4',
            'DTS : X® Ultra Audio : ALC1220 & Rear ESS SABRE Hi-Fi 9118 DAC',
            'PCIe UD Slot X : PCIe 5.0 x16 slot with 10X strength for graphics card'
        ],
        price: 100,
        brand: 'Gigabyte'
    }),

    new MotherBoard({
        title: 'Z890 AERO D',
        fullTitle: 'Z890 AERO D',
        images: [
            "https://i.postimg.cc/76n1mSXT/0.webp",
            "https://i.postimg.cc/zvdC15sz/1.webp",
            "https://i.postimg.cc/Df5dGd89/2.webp",
            "https://i.postimg.cc/BbZTytw7/3.webp",
            "https://i.postimg.cc/ZKRPxBNC/4.webp"
        ],
        description: [
            'PROCESSOR LGA1851 socket: Support for Intel® Core™ Ultra Processors L3 cache varies with CPU * Please refer to "CPU Support List" for more information.',
            'Intel® Z890 Express Chipset',
            'Support for DDR5 9500(O.C) / 9466(O.C) / 9333(O.C) / 9200(O.C)/ 9066(O.C) / 8933(O.C) / 8800(O.C) /8600(O.C) / 8400(O.C) /8266(O.C) / 8200(O.C) / 8000(O.C) / 7950(O.C) / 7900(O.C) / 7800(O.C) / 7600(O.C.) / 7400(O.C.) / 7200(O.C.) / 7000(O.C.) / 6800(O.C.) / 6600(O.C.) / 6400 / 6200 / 6000 / 5800 / 5600MT/s memory modules.',
        ],
        price: 100,
        brand: 'Gigabyte'
    }),

    new MotherBoard({
        title: 'X570 PG Velocita',
        fullTitle: 'X570 Phantom Gaming Velocita',
        description: [
            'Soporta Socket AMD AM4 Ryzen™ 2000, 3000, 4000 G-Series, 5000 y 5000 G-Series Desktop Processors',
            'Diseño de fase de alimentación 14, Digi Power, Dr. MOS',
            '2 PCIe 4.0 x16, 3 PCIe 4.0 x1*',
            'Soporta memoria DDR4 5000+ (OC)',
            '8 SATA3, 1 Hyper M.2 (PCIe Gen4 x4), 1 Hyper M.2 (PCIe Gen4 x4 & SATA3)*'
        ],
        images: [
            'https://i.postimg.cc/VvwGNYZX/0.png',
            'https://i.postimg.cc/50LK1Hgx/1.png',
            'https://i.postimg.cc/KYdpd7nq/2.png',
            'https://i.postimg.cc/q7tZbDC6/3.png',
            'https://i.postimg.cc/gjKMXf1Q/4.png'
        ],
        price: 90,
        brand: 'AsRock'
    }),

    new MotherBoard({
        title: 'Z690 PG Velocita',
        fullTitle: 'Z690 Phantom Gaming Velocita',
        description: [
            'Soporta 14th, 13th & 12th Gen Intel® Core™ Processors (LGA1700)',
            '1 PCIe 5.0 x16, 1 PCIe 4.0 x16, 1 PCIe 3.0 x16 2 PCIe 3.0 x1',
            '4 x DDR5 DIMMs Soporta Dual Channel, up to 6400+ (OC)',
            '6 SATA3 1 Blazing M.2 (PCIe Gen5x4)',
            'Killer E3100 2.5G LAN, Intel® Gigabit LAN'
        ],
        images: [
            "https://i.postimg.cc/PfbVRwNy/0.png",
"https://i.postimg.cc/8zcycX4X/1.png",
"https://i.postimg.cc/Pr23tnW8/2.png",
"https://i.postimg.cc/SNy1FxMh/3.png",
"https://i.postimg.cc/3xqtvjb8/4.png"
        ],
        price: 90,
        brand: 'AsRock'
    }),
/*
    new MotherBoard({
        title: '',
        fullTitle: '',
        description: [
            '',
            '',
            '',
            '',
            ''
        ],
        images: [],
        price: 90,
        brand: 'AsRock'
    }),

    new MotherBoard({
        title: '',
        fullTitle: '',
        description: [
            '',
            '',
            '',
            '',
            ''
        ],
        images: [],
        price: 90,
        brand: 'AsRock'
    }),
*/
]

export const Fuentes = [
    new PowerSource({
        title: 'EVGA SuperNOVA 450 GM - 80 Plus Gold 450W',
        fullTitle: 'EVGA SuperNOVA 450 GM, 80 Plus Gold 450W, Fully Modular, ECO Mode with DBB Fan, 7 Year Warranty, Includes Power ON Self Tester, SFX Form Factor, Power Supply 123-GM-0450-Y1',
        images: [
            'https://i.postimg.cc/B6WQLw9n/0.png',
            'https://i.postimg.cc/4ysfw73C/1.png',
            'https://i.postimg.cc/Y9121fMf/2.png',
            'https://i.postimg.cc/pVJXrZ0P/3.png',
            'https://i.postimg.cc/BbpqzS8j/4.png',
        ],
        description: [
            'EFICIENCIA - GOLD',
            'MODO ECO - AUTO',
            'MODULAR - FULL',
            'GARANTÍA - 7 Año(s)',
            'TAMAÑO DE VENTILADOR - 92mm',
            'RENDIMIENTO - 2'
        ],
        price: 0,
        brand: 'EVGA'
    }),

    new PowerSource({
        title: 'EVGA 750 N1, 750W',
        fullTitle: 'EVGA 750 N1, 750W, 2 Year Warranty, Power Supply 100-N1-0750-L1',
        images: [
            'https://i.postimg.cc/tJBj5BfP/0.jpg',
            'https://i.postimg.cc/L4D22sXX/1.jpg',
            'https://i.postimg.cc/sD2yXRQJ/2.jpg',
            'https://i.postimg.cc/bryPk76p/3.jpg',
            'https://i.postimg.cc/YC5wbGXX/4.jpg',
        ],
        description: [
            'EFICIENCIA - Sin certificación',
            'MODO ECO - No',
            'MODULAR - No',
            'GARANTÍA - 2 Año(s)',
            'TAMAÑO DE VENTILADOR - 120mm',
            'RENDIMIENTO - 1'
        ],
        price: 0,
        brand: 'EVGA'
    }),

    new PowerSource({
        title: 'EVGA SuperNOVA 1000 GT, 80 Plus Gold 1000W',
        fullTitle: 'EVGA SuperNOVA 1000 GT, 80 Plus Gold 1000W, Fully Modular, Eco Mode with FDB Fan, 10 Year Warranty, Includes Power ON Self Tester, Compact 150mm Size, Power Supply 220-GT-1000-X1',
        images: [
            'https://i.postimg.cc/SKnJzMnD/0.jpg',
            'https://i.postimg.cc/Hx5n614M/1.jpg',
            'https://i.postimg.cc/x1xXCR1X/2.jpg',
            'https://i.postimg.cc/8CxsdzWD/3.jpg',
            'https://i.postimg.cc/MHST43dF/4.jpg'
        ],
        description: [
            'EFICIENCIA - GOLD',
            'MODO ECO - AUTO',
            'MODULAR - FULL',
            'GARANTÍA - 5 Año(s)',
            'TAMAÑO DE VENTILADOR - 135mm',
        ],
        price: 120,
        brand: 'EVGA'
    }),

    new PowerSource({
        title: 'EVGA SuperNOVA 1000G XC, 80 Plus Gold 1000W ',
        fullTitle: 'EVGA SuperNOVA 1000G XC ATX3.0 & PCIE 5, 80 Plus Gold Certified 1000W, 12VHPWR, Fully Modular, ECO MODE with FDB Fan, 100% Japanese Capacitors, Compact 150mm Size, Power Supply 520-5G-1000-K1',
        images: [
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        description: [
            'EFICIENCIA - GOLD',
            'MODO ECO - YES',
            'MODULAR - Semi-Modular',
            'GARANTÍA - 5 Año(s)',
            'TAMAÑO DE VENTILADOR - 135mm',
        ],
        price: 0,
        brand: 'EVGA'
    }),


]

export const GPUs = [
    new GPU({
        title: 'ASUS TUF AMD Radeon RX 7900 XT OC',
        fullTitle: 'ASUS TUF Gaming AMD Radeon RX 7900 XT OC Edition - Tarjeta gráfica para juegos (PCIe 4.0, memoria GDDR6 de 20 GB, 1 HDMI 2.1, 3X DisplayPort 2.1, GPU Tweak III, TUF-RX7900XT-O20G-GAMING)',
        images: [
            "https://i.postimg.cc/52qqWgKD/0.jpg",
            "https://i.postimg.cc/1zvGftQH/1.jpg",
            "https://i.postimg.cc/15FrJsGm/2.jpg",
            "https://i.postimg.cc/3xHCqV1g/3.jpg",
            "https://i.postimg.cc/MG606BhH/4.jpg"
        ],
        description: [
            'Tipo de memoria GDDR6',
            'Tamaño de memoria 24GB',
            'Ancho de banda de memoria Hasta 800 GB/s',
            'Ancho de banda de memoria efectivo Hasta 2900 GB/s',
            'Conector de alimentación adicional 2x8-Pin',
        ],
        price: 671.49,
        brand: 'ASUS'
    }),

    new GPU({
        title: 'Sapphire Nitro+ AMD Radeon RX 6700 XT OC',
        fullTitle: 'Sapphire Nitro+ AMD Radeon RX 6700 XT Gaming OC 12GB GDDR6 HDMI/Triple DP Tarjeta gráfica 11306-01-20G',
        images: [
            "https://i.postimg.cc/MGnTmKBt/0.jpg",
            "https://i.postimg.cc/2yDSYQKX/1.jpg",
            "https://i.postimg.cc/DzRzjkdh/2.jpg",
            "https://i.postimg.cc/wvJjnf0m/3.jpg",
            "https://i.postimg.cc/Wzwb1DRp/4.jpg"
        ],
        description: [
            'Tipo de memoria GDDR6',
            'Tamaño de memoria 12GB',
            'Interfaz: Pci-Express 4.0',
            'Gpu: Gpu De 7 / Nm Arquitectura Amd Rdna ™ 2',
            'Displayport 1.4: 7680 × 4320',

        ],
        price: 904.09,
        brand: 'Sapphire'
    }),

    new GPU({
        title: 'ASUS TUF RTX4070 TI 12GB',
        fullTitle: 'ASUS TUF Gaming TUF-RTX4070TI-O12G-GAMING NVIDIA GeForce RTX 4070 Ti 12 GB GDDR6X',
        images: [
            "https://i.postimg.cc/k4t2qXXD/0.jpg",
            "https://i.postimg.cc/3wNyfFsX/1.jpg",
            "https://i.postimg.cc/RZX6TDDC/2.jpg",
            "https://i.postimg.cc/g07xC6pf/3.jpg",
            "https://i.postimg.cc/fynJLnJC/4.jpg"
        ],
        description: [
            'Tipo de memoria GDDR6',
            'Tamaño de memoria 12GB',
            'Los condensadores militares con una resistencia nominal de 20 000 horas a 105 grados aumentan la durabilidad del raíl de alimentación de la GPU.',
            'Núcleos RT de 3.ª generación: hasta el doble de rendimiento en el ray tracing.  ',
            'Con NVIDIA DLSS3, la ultraeficiente arquitectura Ada Lovelace y ray tracing completo. ',
        ],
        price: 1041.16,
        brand: 'ASUS'
    }),

    new GPU({
        title: 'ASUS ROG Strix RTX 3090 OC 24GB',
        fullTitle: 'ASUS ROG Strix GeForce RTX 3090 OC Edition 24GB GDDR6X - Tarjeta gráfica para juegos con ventiladores de tecnología axial y ventilador central de presión estática ROG-STRIX-RTX3090-O24G-GAMING',
        images: [
            "https://i.postimg.cc/ryr4LgKg/0.jpg",
            "https://i.postimg.cc/G2BytxzL/1.jpg",
            "https://i.postimg.cc/BbHPcZdR/2.jpg",
            "https://i.postimg.cc/fL609Sgx/3.jpg",
            "https://i.postimg.cc/WbmJd3mk/4.jpg"
        ],
        description: [
            'Tipo de memoria GDDR6X',
            'Tamaño de memoria 24GB',
            'CUDA Core 10496',
            'Velocidad de Memoria 19.5 Gbps',
            'Resolución Digital Max Resolution 7680 x 4320',
        ],
        price: 1499.99,
        brand: 'ASUS'
    }),

    new GPU({
        title: 'Intel Arc B580 12 GB GDDR6',
        fullTitle: 'Intel Arc B580 Titan OC, 12 GB GDDR6, enfriamiento desgarrado 2.0, ventilador axial, luz de respiración, placa trasera de metal, SB580T-12GOC',
        images: [
            "https://i.postimg.cc/9XZDkMnn/0.jpg",
            "https://i.postimg.cc/X7Wr6WM7/1.jpg",
            "https://i.postimg.cc/CxLdd4L3/2.jpg",
            "https://i.postimg.cc/T1Vh57b6/3.jpg",
            "https://i.postimg.cc/HstVpNH0/4.jpg"
        ],
        description: [
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        price: 0,
        brand: 'Intel'
    }),

    new GPU({
        title: 'ASRock A770 16GB',
        fullTitle: 'ASRock A770 Phantom Gaming 16G, tarjeta gráfica con GDDR6 y refrigeración silenciosa',
        images: [
            "https://i.postimg.cc/mZzYgB6Y/0.webp",
            "https://i.postimg.cc/xC7L34qN/1.webp",
            "https://i.postimg.cc/wMmLfQsf/2.webp",
            "https://i.postimg.cc/gk3334pr/3.webp",
            "https://i.postimg.cc/zDsnL699/4.webp"
        ],
        description: [
            "16GB 256-bit GDDR6",
            "Intel® Xe HPG Microarchitecture",
            "Intel® Xe Super Sampling (XeSS)",
            "DirectX® 12 Ultimate",
            "Clock da GPU: 2200 MHz",
            "Clock da Memória: 17.5 Gbps",
        ],
        price: 0,
        brand: 'AsRock'
    }),
]




export let db: Array<MotherBoard | PowerSource | GPU > = [];

function AddToDB (arr: MotherBoard[] | PowerSource[] | GPU[]){
    arr.forEach(element => {
        db.push(element);
    });
}

AddToDB(TarjetasMadre);
AddToDB(Fuentes);
AddToDB(GPUs)


/* Estructura de la base de datos */

export const Base_de_Datos = {
    Hot_Products: [

    ],
    
    AllProducts: {
        MotherBoars: [
            new MotherBoard({
                title: 'TUF GAMING Z690-PLUS WIFI D4',
                fullTitle: 'Tarjeta madre para juegos Intel® Z690 (LGA 1700) ATX, 15 fases de poder DrMOS, PCIe® 5.0, memoria DDR4, cuatro puertos M.2, WiFi 6 y Ethernet Intel de 2.5Gb, HDMI®, DisplayPort™, USB 3.2 Gen 2x2 Type-C®, USB 3.2 Gen 2 Type C frontal, SATA 6 Gbps, Thunderbolt™ 4 e iluminación Aura Sync RGB',
                description: [
                    "Socket Intel® LGA 1700: Listo para procesadores Intel® de 14a, 13a y 12a Gen.",
                    "Solución de energía mejorada: 14 + 1 fases de poder DrMOS, PCB de seis capas, conectores ProCool, chokes de aleación y capacitores duraderos para una entrega de energía estable.",
                    'Conectividad de próxima generación: PCIe® 5.0, USB 3.2 Gen2x2 Type-C®, USB 3.2 Gen 2 Type-C frontal y Thunderbolt™ 4.',
                    "Hecha para juegos en línea: WiFi 6, Intel 2.5 Gb Ethernet y TUF LANGuard.",
                    'Cancelación de ruido de IA bidireccional: Reduce el ruido de fondo del micrófono y la salida de audio para una comunicación nítida en juegos o videoconferencias.',
                    "Refrigeración completa: Disipador de calor VRM ampliado, disipador de calor PCH sin ventilador, disipadores de calor M.2, puertos de ventilador híbridos y utilidad Fan Xpert 4 en Armory Crate.",
                    'Efectos RGB Aura deslumbrantes: Elegante diseño de iluminación de borde y PCH, puertos RGB direccionables y soporte para tiras RGB.'
                ],
                price: 89,
                images : [
                    'https://i.postimg.cc/7YVcf2kh/0.webp',
                    'https://i.postimg.cc/Qxsw8qvv/1.webp',
                    'https://i.postimg.cc/h4VNRYZ9/2.webp',
                    'https://i.postimg.cc/Fzb6bfkP/3.webp',
                    'https://i.postimg.cc/g227R2zD/4.webp'
                ],
                brand: 'ASUS',
            }),
            //...
        ],
        PowerSources: [],
        GPUs: [],
        RamMemories: [],
        Processors: []
    },

    Users: {
        user: {}
    },

}