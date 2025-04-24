import { TabsRootProps } from "@chakra-ui/react";
import React from "react";

export type TabConfig = {
  value: string;
  title: string;
  content: React.JSX.Element;
}

export type TabsProps = {
  variant: TabsRootProps['variant']
  config: Array<TabConfig>
}