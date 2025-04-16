/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        dark: '#1a1a1a',
        offwhite: '#f5f5f5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
