import React, { FC } from 'react';
import { Tabs as UITabs } from "@chakra-ui/react"
import { TabsProps } from './types';

export const ChakraTabs: FC<TabsProps> = ({ config, variant }) => {
  return (
    <UITabs.Root variant={variant} defaultValue={config[0].value} lazyMount unmountOnExit>
      <UITabs.List>
        {config.map(tab => (
          <UITabs.Trigger key={tab.value} value={tab.value}>
            {tab.title}
          </UITabs.Trigger>
        ))}
        {/* <UITab.Indicator /> */}
      </UITabs.List>
      {config.map(tab => (
        <UITabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </UITabs.Content>
      ))}
    </UITabs.Root>
  )
}
