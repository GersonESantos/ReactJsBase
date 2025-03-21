import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const updateThemeIcon = (newTheme) => {
    return newTheme === 'dark' ? '🌙' : '☀️';
  };

  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(selectedTheme);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
    if (currentTheme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setTheme(currentTheme);
    }
  }, []);

  return { theme, handleThemeChange, updateThemeIcon };
};