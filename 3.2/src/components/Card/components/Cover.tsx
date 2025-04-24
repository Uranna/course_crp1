import React, { FC } from 'react';

type CoverProps = {
  alt: string;
  imageSrc: string;
};

export const Cover: FC<CoverProps> = ({ alt, imageSrc }) => (
  <img alt={alt} src={imageSrc} className='w-full h-full object-cover'/>
);

