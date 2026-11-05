/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['Sora', 'monospace'],
        thai: ['Sora', 'sans-serif'],
        hand: ['Sora', 'sans-serif']
      },
      colors: {
        paper: {
          bg: '#F4F4EE',
          card: '#FFFFFF',
          border: '#18181B',
          line: '#DFDFD6'
        },
        ink: {
          dark: '#121214',
          card: '#141416',
          border: '#3F3F46',
          line: '#27272A'
        }
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #18181B',
        'brutal-sm': '2px 2px 0px 0px #18181B',
        'brutal-lg': '6px 6px 0px 0px #18181B',
        'brutal-dark': '4px 4px 0px 0px #FFFFFF',
        'brutal-dark-sm': '2px 2px 0px 0px #FFFFFF',
      }
    },
  },
  plugins: [],
}
