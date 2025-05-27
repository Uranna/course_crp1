'use client';
import { useProductsStore } from "@/shared/stores/products";
import { Header } from "@/widgets/Header";
import { Container } from "@chakra-ui/react";
import { useEffect } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const {isLoading, products, fetchProducts} = useProductsStore();

  useEffect(() => {
    if (!(isLoading || products.length)) {
      fetchProducts();
    }
  }, [isLoading, products, fetchProducts]);

  return (
    <>
    <Header />
    <Container as='main' mx='auto' px={4} pt={6}>
      {children}
    </Container>
    </>
  );
}
