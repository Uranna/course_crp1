type NutritionInfo = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  weight: number;
  ingredients: string[];
  inStock: number;
  popularity: number;
  description: string;
  nutrition: NutritionInfo;
  allergens: Array<string>;
  image: string;
  discount?: number;
  rating?: number;
};
