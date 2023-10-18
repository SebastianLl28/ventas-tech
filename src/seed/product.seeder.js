const products = [
  {
    name: 'Smartphone Samsung Galaxy S21',
    description: 'The latest Samsung Galaxy S21 smartphone with high-resolution camera and powerful performance.',
    price: 799.99,
    stock: 50,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Laptop Dell XPS 15',
    description: 'The Dell XPS 15 laptop with a stunning 4K display and exceptional processing power.',
    price: 1499.99,
    stock: 30,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: 'Sony Noise-Canceling Headphones',
    description: 'Immerse yourself in music with Sonys premium noise-canceling headphones.',
    price: 249.99,
    stock: 40,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Smartwatch Apple Watch Series 7',
    description: 'Stay connected and monitor your health with the Apple Watch Series 7.',
    price: 349.99,
    stock: 25,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: '4K Ultra HD TV 65-inch',
    description: 'Experience stunning visuals with this 65-inch 4K Ultra HD television.',
    price: 999.99,
    stock: 15,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'HP OfficeJet Pro Printer',
    description: 'Efficiently print, scan, and fax with the HP OfficeJet Pro all-in-one printer.',
    price: 299.99,
    stock: 20,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'Wireless Bluetooth Speaker',
    description: 'Enjoy your favorite music wirelessly with this portable Bluetooth speaker.',
    price: 49.99,
    stock: 60,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Gaming Laptop ASUS ROG Strix',
    description: 'Unleash your gaming potential with the ASUS ROG Strix gaming laptop.',
    price: 1899.99,
    stock: 10,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: 'DJI Phantom 4 Pro Drone',
    description: 'Capture stunning aerial footage with the DJI Phantom 4 Pro drone.',
    price: 1499.99,
    stock: 8,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Sony 65-inch OLED TV',
    description: 'Experience cinematic visuals with the Sony 65-inch OLED television.',
    price: 1899.99,
    stock: 12,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'Sony PlayStation 5',
    description: 'Play your favorite games with the Sony PlayStation 5.',
    price: 399.99,
    stock: 15,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Xbox Series S',
    description: 'Play your favorite games with the Xbox Series S.',
    price: 399.99,
    stock: 20,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: "Laptop HP 14 DQ0517LA 14'' Intel Celeron N4120",
    description: 'Play your favorite games with the Xbox One X.',
    price: 399.99,
    stock: 25,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: "Laptop Asus Vivobook X712JA 17'' Core I5 10th",
    description: 'Core i5-1035G1 1,0GHz/3,6GHz 6 MB de caché, 4 núcleos Disco sólido SSD M.2 256GB Disco duro HDD 1TB Memoria RAM 20GB DDR4',
    price: 3149,
    stock: 30,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: 'Laptop Asus TUF FX507zi GAMING 15.6" Core I7 12th',
    description: 'Intel Core I7 12700H 3.5GHz/4.7GHz 14 núcleos, 20 hilos, 24MB SmartCaché Disco Sólido SSD M.2 de 2TB NVMe Disco Sólido SSD M.2 de 1TB NVMe',
    price: 7299,
    stock: 30,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: "Laptop IDEAPAD 3 15ITL6 15.6'' Core I3 1115G4",
    description: "Intel Core i3 1115G4 2.1GHz/3.0GHz 2 núcleos, 4 hilos, 6MB caché Disco Sólido SSD M.2 500GB RAM DDR4 16GB Pantalla 15.6'' Full HD Anti-reflejo Resolución Máxima 1920x1080 Intel UHD Graphics",
    price: 7299,
    stock: 30,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: 'Laptop Lenovo Ideapad Gaming 3 15.6" Core I5 12th',
    description: 'Intel Core i5-12450H Octa-Core 2GHz/4.4Ghz 8 Núcleos, 12MB Caché Disco M.2 NVME 256GB Disco M.2 NVME 1TB Ram 32gb DDR4 Pantalla FHD 15.6" 120HZ Tarjeta de video NVIDIA GeForCe RTX3050 4GB DDR6',
    price: 3899,
    stock: 30,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: "Laptop HP 255 G9 15.6'' Ryzen 5 5625U",
    description: "AMD Ryzen 5 5625U 4.3GHz 16MB de caché L3, 6 núcleos y 12 hilos Disco sólido SSD M.2 512GB Disco duro HDD 1TB Memoria RAM 32GB DDR4 Pantalla 15.6'' HD",
    price: 2699,
    stock: 30,
    image: 'https://www.laptopsdirect.co.uk/Images/A1133S9EA_5_LargeProductImage.jpg?v=1',
    id_category: '08908eaf-8261-44e6-b76f-b4a4352b94f4'
  },
  {
    name: 'PC Gamer Haku RGB AMD A10 7700K',
    description: 'AMD A10 7700k 3.4GHz/3.8GHz 4 núcleos, 4 hilos, 4MB caché L2 FM2+, 45W/65W Disco Sólido SSD 500GB',
    price: 2699,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'PC Gamer Haku Red Ryzen 5 4600G',
    description: 'AMD Ryzen 5 4600G, 3.7GHz/4.2GHz 6 núcleos, 12 hilos, 8MB caché L3 AM4, 65W',
    price: 1699,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'PC Gamer Haku Red Plus Core I5 6th',
    description: 'INTEL Core i5 6th 2.9GHz 4 núcleos, 4 hilos, 6 MB caché AM4, 65W Disco Sólido SSD M.2 500GB NVMe',
    price: 2699,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'PC Gamer Ryu RGB Core I5 6th',
    description: 'AMD A10 7700k 3.4GHz/3.8GHz 4 núcleos, 4 hilos, 4MB caché L2 FM2+, 45W/65W Disco Sólido SSD 500GB',
    price: 2699,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'PC Gamer Draco RGB Core I7 7700F 7th',
    description: 'AMD A10 7700k 3.4GHz/3.8GHz 4 núcleos, 4 hilos, 4MB caché L2 FM2+, 45W/65W Disco Sólido SSD 500GB',
    price: 2699,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'PC Gamer Draco Red Core I5 11400F 11th',
    description: 'AMD A10 7700k 3.4GHz/3.8GHz 4 núcleos, 4 hilos, 4MB caché L2 FM2+, 45W/65W Disco Sólido SSD 500GB',
    price: 2699,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'PC Gamer Intel RGB Core I7 11th',
    description: 'AMD A10 7700k 3.4GHz/3.8GHz 4 núcleos, 4 hilos, 4MB caché L2 FM2+, 45W/65W Disco Sólido SSD 500GB',
    price: 2699,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '7832c855-53cf-42c1-9a74-163bf4217986'
  },
  {
    name: 'Apple iPhone 11 (128 GB) - (PRODUCT)RED',
    description: 'Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas',
    price: 2699,
    stock: 30,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960745-MLA46114990453_052021-O.webp',
    id_category: '88070e53-255f-4997-87cf-e729b814b400'
  },
  {
    name: 'Asus Rog Phone 6 / 12gb',
    description: 'ASUS ROG PHONE 6 / CN VERSION / ROM GLOBAL SNAPDRAGON 8+GEN 1 / 12GB RAM / 128GB.',
    price: 2699,
    stock: 30,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960745-MLA46114990453_052021-O.webp',
    id_category: '88070e53-255f-4997-87cf-e729b814b400'
  },
  {
    name: 'iPhone 11 Pro Max 256 GB verde medianoche',
    description: 'Una pantalla que brilla sobre todo lo conocido La pantalla OLED Super Retina XDR de 6,5", sin marcos y con una resolución FullHD+, es la pantalla más nítida diseñada por Apple. Cuenta con dos niveles máximos de brillo que se ajustan automáticamente a la luz del ambiente. Gracias a la alta intensidad de contrastes y a un mayor nivel de detalle, es perfecta para ver películas HDR, incluso bajo el sol.',
    price: 2699,
    stock: 30,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960745-MLA46114990453_052021-O.webp',
    id_category: '88070e53-255f-4997-87cf-e729b814b400'
  },
  {
    name: 'Asus Rog Phone 6 / Global / 16gb Ram / 512gb / 6,000 Mah',
    description: 'ASUS ROG PHONE 6 SNAPDRAGON 8+GEN 1 / 16GB RAM / 512GB.',
    price: 3799,
    stock: 30,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960745-MLA46114990453_052021-O.webp',
    id_category: '88070e53-255f-4997-87cf-e729b814b400'
  },
  {
    name: 'Asus Rog Phone 7 / Cn Version / Rom Global / 8gb Ram / 256gb',
    description: 'Android 13 / ROG UI / Gorilla Glass Victus. Chipset: Snapdragon 8 Gen 2 (4nm) / GPU: Adreno 740. RAM: 8GB LPDDR5x / ROM: 256GB UFS 4.0.',
    price: 3599,
    stock: 30,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960745-MLA46114990453_052021-O.webp',
    id_category: '88070e53-255f-4997-87cf-e729b814b400'
  },
  {
    name: 'Apple iPhone XR 64 GB - Blanco',
    description: 'El iPhone XR viene con una pantalla Liquid Retina de 6.1 pulgadas (2) y está disponible en seis colores increíbles. El avanzado sistema Face ID te permite desbloquearlo de forma segura e iniciar sesión en tus apps con sólo una mirada.',
    price: 1399,
    stock: 30,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960745-MLA46114990453_052021-O.webp',
    id_category: '88070e53-255f-4997-87cf-e729b814b400'
  },
  {
    name: 'Celular Vozz F1 / 2g Marcacion Rapida / Contesta Automatico',
    description: 'Pantalla 1.77 tecnologia 2g se contesta automaticamente al abrir la tapa camara vga radio fm marcacion rapida del nro 2 al 9 teclas parlantes',
    price: 3599,
    stock: 30,
    image: 'https://http2.mlstatic.com/D_NQ_NP_960745-MLA46114990453_052021-O.webp',
    id_category: '88070e53-255f-4997-87cf-e729b814b400'
  },
  {
    name: 'Samsung Galaxy Tab S6 Lite 128GB - 10.4" Gris',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa. Aenean ornare at lorem non euismod. Aenean tincidunt arcu ut diam molestie auctor. Nulla id mi a nulla viverra feugiat. Aliquam erat volutpat.',
    price: 3599,
    stock: 30,
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2004275190556/2004275190556-3.jpg',
    id_category: 'b8329fb3-7592-4b4f-986d-036165307029'
  },
  {
    name: 'Samsung Galaxy Tab S9 256GB 11" + Cargador',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 3599,
    stock: 30,
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2004275190556/2004275190556-3.jpg',
    id_category: 'b8329fb3-7592-4b4f-986d-036165307029'
  },
  {
    name: 'Tablet apple Ipad 10.2" 64GB Gris espacial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 2119,
    stock: 30,
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2004275190556/2004275190556-3.jpg',
    id_category: 'b8329fb3-7592-4b4f-986d-036165307029'
  },
  {
    name: 'Tablet Galaxy A8 Sm-X200Nzalpeo 32Gb Android 11 10.5 Gris',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 749,
    stock: 30,
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2004275190556/2004275190556-3.jpg',
    id_category: 'b8329fb3-7592-4b4f-986d-036165307029'
  },
  {
    name: 'Samsung Galaxy Tab S9 Plus 512GB 12.4" + Cargador',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 4499,
    stock: 30,
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2004275190556/2004275190556-3.jpg',
    id_category: 'b8329fb3-7592-4b4f-986d-036165307029'
  },
  {
    name: 'Samsung Galaxy Tab S7 FE 128GB - 12.4" Negro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 1899,
    stock: 30,
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2004275190556/2004275190556-3.jpg',
    id_category: 'b8329fb3-7592-4b4f-986d-036165307029'
  },
  {
    name: 'Memoria usb kingston 3.2 64gb datatraveler exodia (kc-u2g64-7gr)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 19,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Funko keychain: overwatch - pharah 32791',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 33,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Pad mouse mega-g eco | con diseño',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 20,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Fuente de poder dahua (dh-pfm321d-us)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 19,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Funda para Laptop 14"',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 20,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'kit xblade stormrage | gaming | pad mouse mouse | led-rgb',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 31,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Funda para Laptop 14"',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 20,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Table hdmi delcom 2.0 3mts slim 4k',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 31,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Memoria usb kingston 64gb kc-u2g64-5r blanco',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 39,
    stock: 30,
    image: 'https://mipclista.com/4775-home_default/computadora-amd.jpg',
    id_category: '4d465022-7e1d-4d93-bd3b-722eef0299f9'
  },
  {
    name: 'Audífono Lenovo Gaming Legion H300 Stereo Negro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 200,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Apple AirPods 2da Gen Bluetooth Blanco',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 200,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Apple AirPods 3ra Gen Bluetooth Blanco',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 200,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Apple AirPods Pro 2da Gen Bluetooth Blanco',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 200,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Teclado Multimedia Antiderrame Teclas Elevadas MICRONICS MCQUEEN K706',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 29,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Teclado Gamer RainbowLED Antiderrame Cybertel Elektron K208',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 43.90,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Teclado Multimedia ENKORE ARGOS ENK301',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 25,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Apple Magic Keyboard con teclado numérico en Inglés - Plata',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 389,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  },
  {
    name: 'Apple magic mouse 2 plata wireless bluetooth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a tristique enim. Maecenas orci risus, pulvinar sit amet ligula a, tincidunt porttitor massa.',
    price: 289,
    stock: 30,
    image: 'https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/m/e/meanico.jpg',
    id_category: '80bb7640-6d9d-436c-a5d6-423d919c1f5a'
  }
]

export default products

/*
  +--------------------------------------+-------------+
  | id                                   | name        |0
  +--------------------------------------+-------------+
  | 4d465022-7e1d-4d93-bd3b-722eef0299f9 | Accessories |
  | 88070e53-255f-4997-87cf-e729b814b400 | Phone       |
  | b8329fb3-7592-4b4f-986d-036165307029 | Tablet      |
  | 7832c855-53cf-42c1-9a74-163bf4217986 | Desktop     |
  | 08908eaf-8261-44e6-b76f-b4a4352b94f4 | Laptop      |
  | 80bb7640-6d9d-436c-a5d6-423d919c1f5a | Other       |
  +--------------------------------------+-------------+
*/
