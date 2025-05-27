import { Product } from "@/entities/product";
import { create } from "zustand";

type ProductsStore = {
  products: Array<Product>;
  isLoading: boolean;
  fetchProducts: () => void;
}

export const useProductsStore = create<ProductsStore>()((set) => ({
  products: [],
  isLoading: false,
  fetchProducts: async () => {
    set({ isLoading: true });
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const products = await response.json();
    set({ products: products.data, isLoading: false });
  },
}))