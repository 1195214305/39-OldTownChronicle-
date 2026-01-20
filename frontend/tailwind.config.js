/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          paper: '#f4e8d0',
          ink: '#2c1810',
          sepia: '#8b7355',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        vintage: ['Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
