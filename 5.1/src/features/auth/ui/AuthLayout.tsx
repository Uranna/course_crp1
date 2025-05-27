'use client'

import { Flex, Box } from '@chakra-ui/react'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      align="center"
      justify="center"
    >
      <Box
        w="full"
        maxW="md" px={4}
      >
        {children}
      </Box>
    </Flex>
  )
}