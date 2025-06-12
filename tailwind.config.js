// tailwind.config.js
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        heading: 'var(--heading)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'gray-light': 'var(--gray-light)',
        'gray-dark': 'var(--gray-dark)',
      },
    },
  },
  plugins: [],
};
