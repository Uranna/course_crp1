'use client';
import { AuthLayout } from "@/features/auth";
import { useProductsStore } from "@/shared/stores/products";
import { Header } from "@/widgets/Header";
import { Container, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isLoading, products, fetchProducts } = useProductsStore();

  useEffect(() => {
    if (!(isLoading || products.length)) {
      fetchProducts();
    }
  }, [isLoading, products, fetchProducts]);

  return (
    <Flex
      minHeight={'100vh'}
      flexDirection={'column'}
    >
      <Header />
      <Container as='main' m='auto' flexGrow={1} px={4} pt={6}>
        <AuthLayout>
          {children}
        </AuthLayout>
      </Container>
    </Flex>
  );
}
