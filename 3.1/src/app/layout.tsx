import { Provider } from "@/components/ui/provider"
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <title>Мой сайт</title>
        <meta name="description" content="Описание сайта" />
      </head>
      <body>
        <main>
          <Provider>
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
}