/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8F469',
          hover: '#b9e55a',
          light: '#dff99f',
          dark: '#a6d23f'
        },
        secondary: {
          DEFAULT: '#4950FF',
          hover: '#3a40e6',
          light: '#7c81ff',
          dark: '#2930cc'
        },
        tertiary: {
          DEFAULT: '#1E3934',
          hover: '#284c45',
          light: '#2a4f4a',
          dark: '#152925'
        },
        background: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          dark: '#111111'
        },
        white: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}