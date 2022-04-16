import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');
  const colorTheme =
    theme === 'light'
      ? ('dark', (localStorage.theme = 'dark'))
      : ('light', (localStorage.theme = 'light'));

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);
  }, [setTheme, colorTheme, theme]);

  return [setTheme, colorTheme];
}
