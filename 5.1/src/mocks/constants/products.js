export const products = [
  // ===== ТОРТЫ =====
  {
    id: 1,
    name: "Торт 'Наполеон'",
    category: "Торты",
    price: 2500,
    weight: 1.8, // кг
    ingredients: ["мука", "масло", "яйца", "сливки", "сахар"],
    inStock: 5,
    popularity: 9,
    description: "Классический торт с нежными слоями и заварным кремом.",
    nutrition: { calories: 420, protein: 5, fat: 28, carbs: 38 }, // КБЖУ на 100 г
    allergens: ["глютен", "лактоза"],
    image: "/images/napoleon.jpg"
  },
  {
    id: 2,
    name: "Торт 'Красный бархат'",
    category: "Торты",
    price: 2800,
    weight: 2.0,
    ingredients: ["мука", "какао", "сливочный сыр", "яйца", "краситель"],
    inStock: 3,
    popularity: 8,
    description: "Нежный бисквит с кремом из сливочного сыра.",
    nutrition: { calories: 380, protein: 6, fat: 22, carbs: 40 },
    allergens: ["глютен", "лактоза"],
    image: "/images/redvelvet.jpg"
  },
  {
    id: 3,
    name: "Торт 'Медовик'",
    category: "Торты",
    price: 2200,
    weight: 1.5,
    ingredients: ["мед", "сметана", "мука", "яйца", "сахар"],
    inStock: 7,
    popularity: 7,
    description: "Мягкие медовые коржи со сметанным кремом.",
    nutrition: { calories: 400, protein: 5, fat: 20, carbs: 45 },
    allergens: ["глютен", "лактоза"],
    image: "/images/medovik.jpg"
  },

  // ===== ПИРОЖНЫЕ =====
  {
    id: 4,
    name: "Пирожное 'Эклер'",
    category: "Пирожные",
    price: 180,
    weight: 0.12,
    ingredients: ["заварное тесто", "сливочный крем", "шоколадная глазурь"],
    inStock: 24,
    popularity: 9,
    description: "Воздушное пирожное с нежным кремом.",
    nutrition: { calories: 320, protein: 4, fat: 18, carbs: 35 },
    allergens: ["глютен", "лактоза"],
    image: "/images/eclair.jpg"
  },
  {
    id: 5,
    name: "Пирожное 'Картошка'",
    category: "Пирожные",
    price: 120,
    weight: 0.08,
    ingredients: ["печенье", "сгущенка", "какао", "сливочное масло"],
    inStock: 15,
    popularity: 7,
    description: "Домашнее пирожное с какао и сгущенкой.",
    nutrition: { calories: 380, protein: 4, fat: 20, carbs: 42 },
    allergens: ["глютен", "лактоза"],
    image: "/images/kartoshka.jpg"
  },
  {
    id: 6,
    name: "Пирожное 'Макрон' (6 шт.)",
    category: "Пирожные",
    price: 600,
    weight: 0.3,
    ingredients: ["миндальная мука", "сахар", "белок", "начинка"],
    inStock: 12,
    popularity: 8,
    description: "Нежные французские макаруны с разными вкусами.",
    nutrition: { calories: 450, protein: 8, fat: 25, carbs: 50 },
    allergens: ["орехи", "яйца"],
    image: "/images/macarons.jpg"
  },

  // ===== ПЕЧЕНЬЕ =====
  {
    id: 7,
    name: "Печенье 'Овсяное'",
    category: "Печенье",
    price: 80,
    weight: 0.1,
    ingredients: ["овсяные хлопья", "мед", "изюм", "корица"],
    inStock: 30,
    popularity: 6,
    description: "Полезное печенье с овсянкой и изюмом.",
    nutrition: { calories: 350, protein: 6, fat: 12, carbs: 50 },
    allergens: ["глютен"],
    image: "/images/oatmeal.jpg"
  },
  {
    id: 8,
    name: "Печенье 'Шоколадное'",
    category: "Печенье",
    price: 90,
    weight: 0.1,
    ingredients: ["мука", "какао", "шоколад", "яйца"],
    inStock: 25,
    popularity: 7,
    description: "Хрустящее печенье с кусочками шоколада.",
    nutrition: { calories: 480, protein: 6, fat: 22, carbs: 60 },
    allergens: ["глютен", "лактоза"],
    image: "/images/chocolatecookie.jpg"
  },
  {
    id: 9,
    name: "Печенье 'Имбирное' (набор)",
    category: "Печенье",
    price: 350,
    weight: 0.5,
    ingredients: ["мука", "имбирь", "мед", "корица", "гвоздика"],
    inStock: 10,
    popularity: 5,
    description: "Ароматное имбирное печенье с пряностями.",
    nutrition: { calories: 400, protein: 5, fat: 15, carbs: 65 },
    allergens: ["глютен"],
    image: "/images/gingerbread.jpg"
  },

  // ===== ПОНЧИКИ =====
  {
    id: 10,
    name: "Пончик",
    category: "Пончики",
    price: 100,
    weight: 0.12,
    ingredients: ["мука", "дрожжи", "сахар", "глазурь"],
    inStock: 20,
    popularity: 8,
    description: "Пышный пончик с сахарной глазурью.",
    nutrition: { calories: 380, protein: 5, fat: 18, carbs: 45 },
    allergens: ["глютен"],
    image: "/images/donut.jpg"
  },
  {
    id: 11,
    name: "Пончик 'Шоколадный'",
    category: "Пончики",
    price: 120,
    weight: 0.13,
    ingredients: ["мука", "какао", "шоколад", "дрожжи"],
    inStock: 15,
    popularity: 7,
    description: "Шоколадный пончик с какао-глазурью.",
    nutrition: { calories: 420, protein: 6, fat: 22, carbs: 50 },
    allergens: ["глютен", "лактоза"],
    image: "/images/chocolatedonut.jpg"
  },
  {
    id: 12,
    name: "Пончик 'Ягодный'",
    category: "Пончики",
    price: 130,
    weight: 0.12,
    ingredients: ["мука", "ягодный джем", "дрожжи", "сахарная пудра"],
    inStock: 18,
    popularity: 6,
    description: "Пончик с начинкой из ягодного джема.",
    nutrition: { calories: 390, protein: 4, fat: 16, carbs: 55 },
    allergens: ["глютен"],
    image: "/images/berrydonut.jpg"
  },

  // ===== КЕКСЫ =====
  {
    id: 13,
    name: "Кекс 'Лимонный'",
    category: "Кексы",
    price: 150,
    weight: 0.15,
    ingredients: ["мука", "лимон", "яйца", "сахар", "масло"],
    inStock: 12,
    popularity: 7,
    description: "Нежный кекс с лимонной цедрой и глазурью.",
    nutrition: { calories: 350, protein: 5, fat: 15, carbs: 45 },
    allergens: ["глютен", "яйца"],
    image: "/images/lemoncake.jpg"
  },
  {
    id: 14,
    name: "Кекс 'Шоколадный'",
    category: "Кексы",
    price: 160,
    weight: 0.16,
    ingredients: ["мука", "какао", "шоколад", "яйца"],
    inStock: 10,
    popularity: 8,
    description: "Мягкий шоколадный кекс с кусочками шоколада.",
    nutrition: { calories: 420, protein: 6, fat: 20, carbs: 50 },
    allergens: ["глютен", "лактоза"],
    image: "/images/chocolatecake.jpg"
  },
  {
    id: 15,
    name: "Кекс 'Морковный'",
    category: "Кексы",
    price: 140,
    weight: 0.15,
    ingredients: ["морковь", "мука", "орехи", "корица", "яйца"],
    inStock: 8,
    popularity: 6,
    description: "Полезный кекс с морковью и орехами.",
    nutrition: { calories: 320, protein: 5, fat: 12, carbs: 45 },
    allergens: ["глютен", "орехи"],
    image: "/images/carrotcake.jpg"
  }
];