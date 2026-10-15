export const initialRestaurants = [
  {
    id: 1,
    name: "Burger Artisan & Beer",
    category: "Hambúrguer",
    rating: 4.8,
    reviewsCount: 342,
    price: "$$",
    address: "Av. Paulista, 1200 - Bela Vista",
    phone: "(11) 3284-9000",
    isOpen: true,
    coords: [-23.5614, -46.6559], // Latitude e Longitude
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    description: "Hambúrgueres artesanais na brasa, pão brioche amanteigado e batatas rústicas com cervejas especiais."
  },
  {
    id: 2,
    name: "Napoletana Pizza Forno a Lenha",
    category: "Pizza",
    rating: 4.9,
    reviewsCount: 512,
    price: "$$$",
    address: "Rua Augusta, 1450 - Consolação",
    phone: "(11) 3141-2020",
    isOpen: true,
    coords: [-23.5558, -46.6601],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    description: "Pizzas no estilo napolitano tradicional, massa de fermentação lenta (48h) e molho de tomate San Marzano."
  },
  {
    id: 3,
    name: "Sushi Sakura Tradicional",
    category: "Japonês",
    rating: 4.7,
    reviewsCount: 289,
    price: "$$$",
    address: "Rua dos Pinheiros, 820 - Pinheiros",
    phone: "(11) 3812-4040",
    isOpen: false,
    coords: [-23.5670, -46.6850],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80",
    description: "Combinados de sushis e sashimis frescos com cortes nobres de salmão, atum e peixes brancos da estação."
  },
  {
    id: 4,
    name: "Café Bistrô & Patisserie",
    category: "Café",
    rating: 4.6,
    reviewsCount: 195,
    price: "$",
    address: "Al. Lorena, 600 - Jardins",
    phone: "(11) 3062-8811",
    isOpen: true,
    coords: [-23.5695, -46.6645],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
    description: "Cafés especiais filtrados na hora, espressos, croissants folhados artesanais e tortas francesas."
  },
  {
    id: 5,
    name: "La Trattoria Pasta Fresca",
    category: "Italiano",
    rating: 4.8,
    reviewsCount: 420,
    price: "$$",
    address: "Rua Bela Cintra, 1800 - Consolação",
    phone: "(11) 3085-7799",
    isOpen: true,
    coords: [-23.5590, -46.6635],
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80",
    description: "Massas frescas artesanais preparadas diariamente: fettuccine, gnocchi e ravioli com queijo parmesão importado."
  },
  {
    id: 6,
    name: "Tacos & Margaritas Cantina",
    category: "Mexicano",
    rating: 4.5,
    reviewsCount: 178,
    price: "$$",
    address: "Rua Oscar Freire, 310 - Cerqueira César",
    phone: "(11) 3061-5522",
    isOpen: false,
    coords: [-23.5645, -46.6710],
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80",
    description: "Autêntica comida de rua mexicana: tacos crocantes, quesadillas, guacamole fresco e drinks especiais."
  }
]

export const categories = ["Todos", "Hambúrguer", "Pizza", "Japonês", "Café", "Italiano", "Mexicano"]