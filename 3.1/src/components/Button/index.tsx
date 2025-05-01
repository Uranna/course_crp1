'use client';

import React, { FC } from 'react';
import { ButtonProps } from './types';
import { cva } from '@/../styled-system/css';
import { styled } from '@/../styled-system/jsx'

export const button = cva({
  base: {
    fontWeight: 'medium',
    borderRadius: 'md',
    cursor: 'pointer',
    px: 6,
    py: 2,
  },
  variants: {
    status: {
      default: {
        color: 'white',
        bg: 'gray.500',
      },
      success: {
        color: 'white',
        bg: 'green.700',
      },
    },
  }
})

const BaseButton = styled('button', button);

export const Button: FC<ButtonProps> = ({ children, alertText }) => {
  return (
    <BaseButton status='success' onClick={() => alert(alertText)}>
      {children}
    </BaseButton>
  );
}
