"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenuItem
      className="flex items-center gap-2 justify-start"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="block dark:hidden w-4 h-4" />
      <Moon className="hidden dark:block w-4 h-4" />
      <span>Toggle theme</span>
    </DropdownMenuItem>
  );
}
