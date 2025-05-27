'use client';

import "./globals.css";
import { useEffect, useState } from "react";
import { SetupWorker } from "msw/browser";
import { Providers } from "./(providers)";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isProd = process.env.NEXT_MODE === 'production'
  const [isLoading, setIsLoading] = useState(!isProd);

  useEffect(() => {
    let worker: SetupWorker | undefined;

    if (!isProd) {
      import('../mocks')
        .then(module => {
          worker = module.worker;
          return worker.start({
            quiet: true,
            onUnhandledRequest: 'bypass',
          });
        })
        .then(() => setIsLoading(false))
    }
    return () => worker?.stop();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {!isLoading && children}
        </Providers>
      </body>
    </html>
  );
}
