/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#080c15',
          card: '#0f172a',
          cardHover: '#1e293b',
          border: '#1e293b',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px -3px rgba(6, 182, 212, 0.35)',
        glowGreen: '0 0 20px -3px rgba(16, 185, 129, 0.35)',
        glowAmber: '0 0 20px -3px rgba(245, 158, 11, 0.35)',
        glowRed: '0 0 20px -3px rgba(244, 63, 94, 0.35)',
      }
    },
  },
  plugins: [],
}
