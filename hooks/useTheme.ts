"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // A classe já foi aplicada por um script inline no <head> (antes do paint),
    // então aqui só sincronizamos o estado do React com o DOM.
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }

  return { isDark, toggleTheme };
}