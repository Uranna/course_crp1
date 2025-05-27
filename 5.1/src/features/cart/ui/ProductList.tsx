import React, { FC, PropsWithChildren, useMemo } from "react";
import { useCartProducts } from "../model/useCartProducts";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { toaster } from "@/shared/ui/Toaster";

type ProductListProps = PropsWithChildren;

export const ProductList: FC<ProductListProps> = () => {
  const { cartItems, totalPrice } = useCartProducts();

  if (!cartItems.length) {
    return (
      <Text textAlign="center" color="gray.500">
        Корзина пуста
      </Text>
    )
  }


  return (
    <>
      <Stack gap={4} mb={4}>
        {cartItems.map(item => (
          <ProductCard key={item.product.id} {...item} />
        ))}
      </Stack>

      <Flex gap={4} fontWeight="bold" fontSize="lg">
        <Text>Итого:</Text>
        <Text>{totalPrice} ₽</Text>
      </Flex>

      <Button
        variant='solid'
        colorPalette="green"
        size="lg"
        px={4}
        onClick={() => {
          toaster.create({
            title: "Заказ оформлен",
            description: `Сумма заказа: ${totalPrice} ₽`,
            type: "success",
            duration: 3000,
          });
          // setCartItems([]);
          // onClose();
        }}
      >
        Оформить заказ
      </Button>
    </>
  );
};