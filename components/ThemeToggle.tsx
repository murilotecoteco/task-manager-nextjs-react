"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      {isDark ? (
        <Moon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
      ) : (
        <Sun className="h-4 w-4 text-slate-600" />
      )}
    </button>
  );
}
