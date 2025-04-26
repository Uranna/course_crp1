import { PropsWithChildren } from "react";

type VariantButton = 'default' | 'primary';

export type ButtonProps = PropsWithChildren & {
  variant?: VariantButton,
}

export type StyledButtonProps = {
  variant: VariantButton;
}
