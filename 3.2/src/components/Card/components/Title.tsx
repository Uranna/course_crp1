import React, { FC, PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren;

export const Title: FC<TitleProps> = ({ children }) => (
  <h2 className='mb-3 font-bold text-primary-500 text-2xl'>
    {children}
  </h2>
);
