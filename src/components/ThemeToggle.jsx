import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/pro-solid-svg-icons';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemPref);
    document.documentElement.setAttribute('data-theme', systemPref);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-accent text-white shadow-2xl"
      whileHover={{ scale: 1.15, rotate: 10, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} size="2x" className="transition-transform" />
    </motion.button>
  );
}
