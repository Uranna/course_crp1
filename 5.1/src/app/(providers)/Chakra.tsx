"use client"

import { ClientOnly, ChakraProvider as UIChakraProvider, defaultSystem } from "@chakra-ui/react"
import { PropsWithChildren } from "react"
import { ThemeProvider as UIThemeProvider } from 'next-themes'

export function ChakraProvider(props: PropsWithChildren) {
  return (
    <ClientOnly>
      <UIChakraProvider value={defaultSystem}>
        <UIThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          {...props}
        />
      </UIChakraProvider>
    </ClientOnly>
  )
}
