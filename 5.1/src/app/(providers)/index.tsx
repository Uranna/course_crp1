"use client"

import React, { FC, PropsWithChildren } from 'react';
import { ChakraProvider as ChakraProvider } from './Chakra';
import { ThemeProvider } from './ThemeProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/shared/stores/cart';
import { Toaster } from '@/shared/ui/Toaster';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ReduxProvider store={store}>
    <ChakraProvider>
      <ThemeProvider>
        <Toaster />
        {children}
      </ThemeProvider>
    </ChakraProvider>
  </ReduxProvider>
) 
