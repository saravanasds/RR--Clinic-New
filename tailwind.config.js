/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          '75%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        // slideUp: 'slideUp 0.5s ease-in-out forwards',
        // slideDown: 'slideDown 0.5s ease-in-out forwards',
        shake: 'shake 3s infinite',
      },
    },
  },
  plugins: [],
}
