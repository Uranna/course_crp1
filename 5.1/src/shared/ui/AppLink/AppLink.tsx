'use client'

import NextLink from 'next/link'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

export const AppLink = ({ href, ...props }: LinkProps) => {
  return (
    <ChakraLink as={NextLink} href={href} {...props} />
  )
}