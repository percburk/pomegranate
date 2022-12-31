/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Hanken Grotesk"', 'Helvetica', 'sans-serif'],
    },
    extend: {
      animation: {
        'spinner-fade-in': 'fadeIn 0.7s ease-in-out, spin 1s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
    },
  },
  plugins: [],
}
