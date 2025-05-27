import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/entities/product";
import { useProductsStore } from "@/shared/stores/products";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductToCart, RootState } from "@/shared/stores/cart";
import { useCallback } from "react";

export const ProductList = () => {
  const { products } = useProductsStore();
  const dispatch = useDispatch()


  const addToCart = (product: Product) => {
    dispatch(addProductToCart({ id: product.id }));
    // setCart([...cart, product]);
    // toast({
    //   title: "Товар добавлен в корзину",
    //   description: `${product.name} добавлен в вашу корзину`,
    //   status: "success",
    //   duration: 2000,
    //   isClosable: true,
    // });
  };

  const removeFromCart = useCallback((product: Product) => {
    dispatch(removeProductToCart({ id: product.id }))
  }, [])

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap="6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
      ))}
    </SimpleGrid>
  );
};