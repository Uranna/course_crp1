import { ThemeToggle } from "@/features/ThemeToggle";
import { IconButton } from "@/shared/ui/IconButton";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { FaShoppingCart } from "react-icons/fa";

type HeaderProps = PropsWithChildren;

export const Header: FC<HeaderProps> = () => {
  return (
    <Box
      as="header"
      bg={{ base: "gray.100", _dark: "gray.900" }}
      position='sticky'
      top={0}
      zIndex={1}
    >
      <Container mx='auto' px={4}>
        <Flex
          py={4}
          align="center"
          justify="space-between"
        >
          <Link href="/">
            <Heading size="md" cursor="pointer">🍬 Candy Shop</Heading>
          </Link>

          <Flex align="center" gap={4}>
            <ThemeToggle />
            <Link href={'/cart'}>
              <IconButton>
                <FaShoppingCart />
              </IconButton>
            </Link>
            {/* <AuthWrapper /> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};