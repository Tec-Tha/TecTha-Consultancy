import { createContext, useEffect, useState, useMemo } from "react";

/**
 * ThemeContext
 * Provides { theme, toggleTheme, setTheme } to the app. Consumed via the
 * separate useTheme hook (hooks/useTheme.js), not directly — components
 * should never import ThemeContext itself.
 *
 * Resolution order on first load:
 *   1. Previously saved choice in localStorage ("theme")
 *   2. OS-level preference (prefers-color-scheme)
 *   3. Falls back to "light"
 *
 * Applies/removes the "dark" class on <html> so Tailwind's `dark:` variants
 * and the CSS variable tokens (--color-bg-primary etc.) switch correctly.
 */
export const ThemeContext = createContext(undefined);

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Stay in sync if the user changes OS-level theme and hasn't made an
  // explicit choice in this browser yet.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const hasExplicitChoice = window.localStorage.getItem(STORAGE_KEY);
      if (!hasExplicitChoice) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};