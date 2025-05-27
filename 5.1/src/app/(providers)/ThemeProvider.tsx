"use client"

import { useTheme as useThemeNext } from "next-themes";
import { createContext, FC, PropsWithChildren, useContext } from "react";

type ThemeContextValue = {
  theme: string | undefined,
  toggleThemeMode: () => void
};

const ThemeContext = createContext<ThemeContextValue>({ theme: undefined, toggleThemeMode: () => { } });
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { resolvedTheme: theme, setTheme } = useThemeNext();

  const toggleThemeMode = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
