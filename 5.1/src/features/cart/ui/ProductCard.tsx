import { Product } from "@/entities/product";
import { addProductToCart, deleteProductToCart, removeProductToCart } from "@/shared/stores/cart";
import { IconButton } from "@/shared/ui/IconButton";
import { Box, Button, Flex, Heading, Image, NumberInput, Stack, Text } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

type ProductCardProps = PropsWithChildren & {
  product: Product;
  quantity: number;
};

export const ProductCard: FC<ProductCardProps> = ({ product, quantity }) => {
  const dispatch = useDispatch();
  return (
    <Box p={3} borderWidth="1px" borderRadius="lg">
      <Flex>
        <Image
          src={product.image}
          alt={product.name}
          width="80px"
          minHeight='100%'
          objectFit="cover"
          borderRadius="md"
          mr={3}
        />
        <Box flex="1">
          <Heading size="sm">{product.name}</Heading>
          <Text>
            {`${product.price} ₽ × ${quantity} = ${product.price * quantity} ₽`}
          </Text>
          <Text fontSize="sm" color="gray.500" mb={4}>
            {product.weight} кг
          </Text>
          <Flex gap={4} alignItems='center'>
            <IconButton
              size="2xs"
              disabled={quantity === 1}
              onClick={() => dispatch(removeProductToCart({ id: product.id }))}
              children={<FaMinus />}
            />

            <Text>{quantity}</Text>

            <IconButton
              size="2xs"
              disabled={quantity === product.inStock}
              onClick={() => dispatch(addProductToCart({ id: product.id }))}
              children={<FaPlus />}
            />
          </Flex>
        </Box>
        <Stack gap={1} ml={2}>
          <IconButton
            children={<FaTrash />}
            aria-label="Удалить"
            size="sm"
            color="red"
            onClick={() => dispatch(deleteProductToCart({ id: product.id }))}
          />
        </Stack>
      </Flex>
    </Box>
  )
};