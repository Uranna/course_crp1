import React, { FC, PropsWithChildren } from 'react';

type BadgeProps = PropsWithChildren;

export const Badge: FC<BadgeProps> = ({ children }) => (
  <span className='inline-block py-1 px-2 bg-primary-500 text-white ml-1 rounded-md'>
    {children}
  </span>
);

