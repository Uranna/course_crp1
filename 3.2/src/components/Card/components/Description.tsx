import React, { FC } from 'react';

type DescriptionProps = {
  content: string | Array<string>
};

export const Description: FC<DescriptionProps> = ({ content }) => {
  const paragraph: Array<string> = Array.isArray(content) ? content : [content];

  return (
    <>
      {paragraph.map(p => (
        <p className='mb-1 text-base text-neutral-900'>
          {p}
        </p>
      ))}
    </>
  )
};
