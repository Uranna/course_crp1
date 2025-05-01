import { Box, CircularProgress, Typography } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

type LoaderProps = {
  isLoading: boolean;
  error: string;
} & PropsWithChildren;

export const LoadingContainer: FC<LoaderProps> = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color='primary' />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
        <Typography>{error}</Typography>
      </Box>
    );
  }

  return children;
};