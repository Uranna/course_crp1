import React, { FC, PropsWithChildren } from 'react';
import { Dialog as DialogPrimitive } from 'radix-ui';
import { RadixDialogContentProps } from './types';
import { AntDButton } from '../AntDButton';

export const RadixDialogContent: FC<RadixDialogContentProps> = ({ children, title, buttons }) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className='fixed inset-0 bg-black/50' />

    <DialogPrimitive.Content
      className='fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[500px] rounded-md bg-white shadow-lg !p-6'
    >
      <DialogPrimitive.Title className='font-medium text-gray-900 !text-lg !mb-4'>
        {title}
        <DialogPrimitive.Close asChild>
          <AntDButton
            aria-label='Close'
            className='!absolute !top-2 !right-2'
          >
            x
          </AntDButton>
        </DialogPrimitive.Close>
      </DialogPrimitive.Title>

      <DialogPrimitive.Description className='!mt-4 text-gray-600 text-sm leading-normal'>
        {children}
      </DialogPrimitive.Description>

      <div className='flex mt-6 justify-end'>
        {buttons.map(({ title: buttonContent, ...buttonProps }) => (
          <AntDButton {...buttonProps}>{buttonContent}</AntDButton>
        ))}
      </div>

    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
  )

export const RadixDialogRoot = DialogPrimitive.Root;
export const RadixDialogTrigger: FC<PropsWithChildren> = ({ children }) => (
  <DialogPrimitive.Trigger asChild>
    {children}
  </DialogPrimitive.Trigger>
);