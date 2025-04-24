import { TabConfig } from "@/components/ChakraTabs/types";
import { MUIRating } from "@/components/MUIRating";
import { AntDButton } from "@/components/AntDButton";
import MantineDateTimePicker from "@/components/MantineDatePicker";

export const tabsConfig: Array<TabConfig> = [
  {
    value: 'AntD',
    title: 'AntD',
    content: <AntDButton>Нажмите на кнопку</AntDButton>
  },
  {
    value: 'MUI',
    title: 'MUI',
    content: <MUIRating />
  },
  {
    value: 'Mantine',
    title: 'Mantine',
    content: <MantineDateTimePicker />
  },
]