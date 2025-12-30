/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Day Theme
        day: {
          bg: 'var(--theme-bg)',
          primary: 'var(--theme-primary)',
          secondary: 'var(--theme-secondary)',
          accent: 'var(--theme-accent)',
          text: 'var(--theme-text)',
        },
        // Night Theme
        night: {
          bg: '#0F0F1A',
          bgSecondary: '#1E1E2E',
          primary: '#00D4FF',
          secondary: '#9D4EDD',
          accent: '#FF6B6B',
          text: '#E2E2E2',
          cyan: '#6EE7FF',
          pink: '#FF8EAA',
        },
      },
      animation: {
        'brush-draw': 'draw 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'watercolor-shift': 'watercolor 10s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.6)' },
        },
        watercolor: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
