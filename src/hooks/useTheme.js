import { useCallback, useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('');

  const setHtmlTheme = useCallback(
    (themeValue = theme) => {
      document.documentElement.setAttribute('data-theme', themeValue);
      setTheme(themeValue);
      localStorage.setItem('selectedTheme', themeValue);
    },
    [theme, setTheme]
  );

  useEffect(() => {
    const themeLocal = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const storedTheme = localStorage.getItem('selectedTheme');

    if (storedTheme) {
      setHtmlTheme(storedTheme);
    } else {
      if (themeLocal) {
        setHtmlTheme('dark');
      }
    }
  }, [setHtmlTheme]);

  return { theme, setHtmlTheme };
}
