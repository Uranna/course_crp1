import { AppBar, Toolbar } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { Container } from '../Container';

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <AppBar position='sticky' elevation={1} sx={{ top: 0 }}>
    <Container sx={{ py: 0 }}>
      <Toolbar sx={{ p: 0 }}>
        {children}
      </Toolbar>
    </Container>
  </AppBar>
);

