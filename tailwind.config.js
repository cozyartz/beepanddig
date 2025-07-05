// tailwind.config.js
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Atkinson', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F5F3E7',
        text: '#2A2F3B',
        heading: '#1A3C34',
        accent: {
          DEFAULT: '#A55E3F',
          hover: '#D99973',
        },
        gray: {
          light: '#DDE2E5',
          dark: '#3F4B5C',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(165, 94, 63, 0.3)',
        'glow-lg': '0 0 40px rgba(165, 94, 63, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};