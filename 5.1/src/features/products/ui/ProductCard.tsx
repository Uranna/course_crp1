import React, { FC } from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { Product } from "@/entities/product";
import { useCartProduct } from "@/shared/stores/cart";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
};

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart, onRemoveFromCart }) => {
  const productInCart = useCartProduct(product.id);

  return (
    <Flex
      bg='surface'
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      flexDirection='column'
    >
      <Image
        src={product.image}
        alt={product.name}
        h="200px"
        w="full"
        objectFit="cover"
      />

      <Box p="4" flexGrow={1}>
        <Box>
          <Flex justify="space-between" align="center" mb="2">
            <Heading as="h3" size="md">
              {product.name}
            </Heading>
            <Badge colorScheme="green" fontSize="sm" px={2}>
              {product.price} ₽
            </Badge>
          </Flex>

          <Text fontSize="sm" color="gray.500" mb="4">
            {product.description}
          </Text>

          <Box mb="4">
            <Text fontSize="sm" mb="1">
              КБЖУ (на 100 г):
            </Text>
            <Text fontSize="sm" color="gray.500">
              {product.nutrition.calories} ккал | Б: {product.nutrition.protein}г | Ж:{" "}
              {product.nutrition.fat}г | У: {product.nutrition.carbs}г
            </Text>
          </Box>

          <Text fontSize="sm" color="gray.500" mb="6">
            В наличии:  {product.inStock}
          </Text>
        </Box>

        <Box mt='auto'>
          {productInCart
            ? (
              <Flex gap={2} justifyContent='space-between'>
                <Link href="/cart">
                  <Button
                    size="md"
                    variant='solid'
                    px={3}
                    colorPalette='orange'
                  >
                    <FaShoppingCart />
                    Перейти в корзину
                  </Button>
                </Link>

                <Flex gap={2} alignItems='center'>
                  <Button size="sm" onClick={() => onRemoveFromCart(product)}>
                    <FaMinus />
                  </Button>

                  <Text>{productInCart.quantity}</Text>

                  <Button
                    size="sm"
                    disabled={productInCart.quantity === product.inStock}
                    onClick={() => onAddToCart(product)}
                  >
                    <FaPlus />
                  </Button>

                </Flex>
              </Flex>
            )
            : (
              <Button
                colorPalette='orange'
                variant='solid'
                size="md"
                w="full"
                disabled={product.inStock <= 0}
                onClick={() => onAddToCart(product)}
              >
                <FaShoppingCart />
                В корзину
              </Button>
            )
          }
        </Box>
      </Box>
    </Flex>
  )
};
