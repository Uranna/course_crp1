import { DialogContentProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { AntDButtonProps } from "../AntDButton/types";

export type RadixDialogButtonProps = {
  id: string;
  title: string;
} & AntDButtonProps

export type RadixDialogContentProps = PropsWithChildren & DialogContentProps & {
  title: string;
  buttons: Array<RadixDialogButtonProps>;
}