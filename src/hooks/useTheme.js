import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('dafault');
  const setHtmlTheme = (themeValue = theme) => {
    document.documentElement.setAttribute('data-theme', themeValue);
    setTheme(themeValue);
    localStorage.setItem('selectedTheme', themeValue);
  };
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
  }, []);

  return { theme, setHtmlTheme };
}
