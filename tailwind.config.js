/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface-container': 'var(--color-surface-container)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-container-high': 'var(--color-surface-container-high)',
        'surface-container-lowest': 'var(--color-surface-container-lowest)',
        'background': 'var(--color-background)',
        'on-surface': 'var(--color-on-surface)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        'outline-variant': 'var(--color-outline-variant)',
        'outline': 'var(--color-outline)',
        'primary': '#10b981',
        'primary-container': '#059669',
        'secondary': '#34d399',
        'secondary-container': '#047857',
        'tertiary': '#6ee7b7',
        'on-primary': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
