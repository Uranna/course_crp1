import React, { FC } from 'react';
import { Button as UIButton } from "antd"
import { AntDButtonProps } from './types';

export const AntDButton: FC<AntDButtonProps> = ({ children, ...buttonProps }) => (
  <UIButton {...buttonProps}>
    {children}
  </UIButton>
);
