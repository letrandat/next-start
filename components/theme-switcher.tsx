"use client";

import { Switch } from "@heroui/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

import useSystemTheme from "@/hooks/use-system-theme";

export function ThemeSwitcher({ showLabel }: { showLabel?: boolean }) {
  const { theme, setTheme } = useSystemTheme();

  return (
    <Switch
      isSelected={theme === "dark"}
      onValueChange={() =>
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
      size="lg"
      color="success"
      startContent={<IconMoon />}
      endContent={<IconSun />}
    >
      {showLabel && "Theme"}
    </Switch>
  );
}
