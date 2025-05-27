import { IconButtonProps as UIIconButtonProps, IconButton as UIIconButton } from "@chakra-ui/react";
import React, { FC } from "react";

export const IconButton: FC<UIIconButtonProps> = props => <UIIconButton variant='ghost' {...props} />;