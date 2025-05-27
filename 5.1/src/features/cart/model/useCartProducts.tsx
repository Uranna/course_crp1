import { useCartProducts as useCartProductsStore } from "@/shared/stores/cart";
import { useProductsStore } from "@/shared/stores/products";
import { useMemo } from "react";

export const useCartProducts = () => {
  const { products: allProducts } = useProductsStore();
  const cartProducts = useCartProductsStore();

  const cartItemsWithDetails = useMemo(() => (
    cartProducts.map(({ id, quantity }) => {
      const product = allProducts.find(product => product.id === id);
      return product ? { product, quantity } : null;
    }).filter(product => !!product)
  ), [allProducts, cartProducts]);

  const cartTotalPrice = useMemo(() => (
    cartItemsWithDetails.reduce(
      (total, { quantity, product }) => total + quantity * product.price, 
      0
    )
  ), [cartItemsWithDetails]);

  return { 
    cartItems: cartItemsWithDetails, 
    totalPrice: cartTotalPrice 
  };
};