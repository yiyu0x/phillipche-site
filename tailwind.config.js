/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'wave': 'wave 1s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'scaleY(1)' },
          '10%': { transform: 'scaleY(1.05)' },
          '20%': { transform: 'scaleY(1.1)' },
          '30%': { transform: 'scaleY(1.2)' },
          '40%': { transform: 'scaleY(1.3)' },
          '50%': { transform: 'scaleY(1.4)' },
          '60%': { transform: 'scaleY(1.3)' },
          '70%': { transform: 'scaleY(1.2)' },
          '80%': { transform: 'scaleY(1.1)' },
          '90%': { transform: 'scaleY(1.05)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    // Timeline dot colors
    'bg-blue-500',
    'bg-amber-300',
    'bg-green-500',
    'bg-red-500',

    // Hobby text colors
    {
      pattern: /text-(rose|blue|green|purple)-500/,
      variants: ['dark']
    },

    // Skill badge colors
    {
      pattern: /bg-(teal|blue|green|red|yellow|amber)-500/,
      variants: ['hover', 'dark']
    },
    {
      pattern: /bg-(teal|blue|green|red|yellow|amber)-600/,
      variants: ['hover', 'dark']
    },

    // Learning progress colors
    {
      pattern: /bg-(amber|purple|rose)-[45]00/,
      variants: ['dark']
    },

    // Nav bubble colors
    'bg-gray-100',
    'dark:bg-gray-800',
    'hover:bg-gray-200',
    'dark:hover:bg-gray-700'
  ],
} 