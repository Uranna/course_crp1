import { ContainerProps, Container as UIContainer } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren & { sx?: ContainerProps['sx'] }> = ({ children, sx = {} }) => (
  <UIContainer maxWidth="md" sx={{ py: 4, ...sx }}>
    {children}
  </UIContainer>
);

