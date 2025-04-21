"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { MantineProvider } from "@mantine/core"
import { DatesProvider as UIDatesProvider } from '@mantine/dates';
import type { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = props => (
  <ChakraProvider value={defaultSystem}>
    <MantineProvider>
      <UIDatesProvider settings={{ consistentWeeks: true, locale: 'ru' }}>
        {props.children}
      </UIDatesProvider>
    </MantineProvider>
  </ChakraProvider>
)
