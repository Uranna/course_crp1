import React from 'react';
import styled from '@emotion/styled'
import { ButtonProps, StyledButtonProps } from './types';
import { css } from '@emotion/react';

const StyledButton = styled.button<StyledButtonProps>(({ theme, variant }) => ({
  position: 'relative',
  padding: theme.button.padding,
  height: theme.button.height,
  background: theme.button.background[variant],
  '&:hover::before': css`
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, .1);
  `,
  color: theme.button.color[variant],
  border: theme.button.border[variant],
  borderRadius: theme.button.borderRadius,
  cursor: 'pointer',

}));

export const Button: React.FC<ButtonProps> = ({ variant = 'default', children }) => (
  <StyledButton variant={variant}>{children}</StyledButton>
);
