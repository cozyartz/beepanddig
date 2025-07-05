import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemPref);
      document.documentElement.setAttribute('data-theme', systemPref);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-br from-accent via-accent-light to-accent-hover backdrop-blur-sm text-white shadow-2xl border border-accent/30 z-50 overflow-hidden"
      whileHover={{ 
        scale: 1.1, 
        rotate: theme === 'light' ? 15 : -15,
        boxShadow: "0 0 30px rgba(165, 94, 63, 0.6), 0 0 60px rgba(165, 94, 63, 0.3)",
        transition: { duration: 0.3 } 
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent-light via-accent to-accent-hover opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon container */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={{ 
          rotate: theme === 'light' ? 0 : 180,
          scale: theme === 'light' ? 1 : 1.1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Sun icon - visible in light mode */}
        <motion.div
          className="absolute"
          animate={{ 
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0.8,
            rotate: theme === 'light' ? 0 : 180
          }}
          transition={{ duration: 0.4 }}
        >
          <Sun 
            size={24} 
            className="text-white drop-shadow-lg" 
          />
        </motion.div>
        
        {/* Moon icon - visible in dark mode */}
        <motion.div
          className="absolute"
          animate={{ 
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.8,
            rotate: theme === 'dark' ? 0 : -180
          }}
          transition={{ duration: 0.4 }}
        >
          <Moon 
            size={24} 
            className="text-white drop-shadow-lg" 
          />
        </motion.div>
      </motion.div>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
}
