
import { useMemo, useState } from 'react';
import { ChakraTabs } from '@/components/ChakraTabs';
import { RadixDialogContent, RadixDialogRoot, RadixDialogTrigger } from '@/components/RadixDialog';
import { Providers } from '@/providers/Providers';
import { tabsConfig } from '@/config/tabs';
import { AntDButton } from '@/components/AntDButton';

const App = () => {
  const [open, setOpen] = useState(false);
  const buttons = useMemo(() => [
    {
      id: 'submit',
      title: 'OK',
      onClick: () => setOpen(false),
    }
  ], [])

  return (
    <main>
      <h2>1</h2>
      <Providers>
        <ChakraTabs variant='subtle' config={tabsConfig} />
      </Providers>

      <h2>2</h2>
      <RadixDialogRoot open={open} onOpenChange={setOpen}>
        <RadixDialogTrigger>
          <AntDButton>Открыть диалог</AntDButton>
        </RadixDialogTrigger>

        <RadixDialogContent title='Заголовок диалога' buttons={buttons}>
          Содержимое диалога
        </RadixDialogContent>
      </RadixDialogRoot>
    </main>
  )
};

export default App
