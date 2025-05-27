import { useTheme } from "@/app/(providers)/ThemeProvider";
import { IconButton } from "@/shared/ui/IconButton";
import React, { FC, PropsWithChildren } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

type ThemeToggleProps = PropsWithChildren;

export const ThemeToggle: FC<ThemeToggleProps> = () => {
  const { theme, toggleThemeMode } = useTheme();
  return (
    <IconButton onClick={toggleThemeMode}>
      {theme === "dark" ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
};