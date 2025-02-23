/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        textShadow: {
          default: '1px 1px 0 rgba(0, 0, 0, 0.7)',
          md: '2px 2px 0 rgba(0, 0, 0, 0.7)',
          lg: '3px 3px 0 rgba(0, 0, 0, 0.7)',
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
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
        slideUp: 'slideUp 0.5s ease-in-out forwards',
        slideDown: 'slideDown 0.5s ease-in-out forwards',
        shake: 'shake 3s infinite',
        bounce: 'bounce 2s infinite',
        marquee: 'marquee 10s linear infinite',
      },
      boxShadow: {
        'clay-card': '35px 35px 70px hsl(302deg 25% 50%), inset -10px -10px 20px hsl(302deg 25% 50% / 70%), inset 0 16px 32px hsl(302deg 25% 95%)',
        'clay-btn': '16px 16px 32px 0 hsl(302deg 25% 50%), inset -16px -16px 32px 0 hsl(302deg 25% 50% / 70%), inset 8px 8px 16px hsl(302deg 25% 95%) '
      },
       fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // For headers and navbar
        opensans: ['Open Sans', 'sans-serif'], // For body text
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        cursive: ["Lobster", 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
