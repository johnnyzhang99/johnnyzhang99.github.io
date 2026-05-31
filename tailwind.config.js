import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    darkTheme: 'academicdark',
    themes: [
      {
        // 朴素学术风 — light / white background, monochrome accents
        academic: {
          primary: 'dodgerblue', // near-black
          'primary-content': '#ffffff',
          secondary: '#52525b',
          'secondary-content': '#ffffff',
          accent: '#3f3f46',
          'accent-content': '#ffffff',
          neutral: '#18181b',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f6f6f7',
          'base-300': '#e4e4e7',
          'base-content': '#18181b',
          info: '#52525b',
          success: '#3f3f46',
          warning: '#71717a',
          error: '#404040',
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.375rem',
        },
      },
      {
        // 朴素学术风 — dark / black background, monochrome accents
        academicdark: {
          primary: '#f4f4f5', // light on dark
          'primary-content': '#101012',
          secondary: '#d4d4d8',
          'secondary-content': '#101012',
          accent: '#a1a1aa',
          'accent-content': '#101012',
          neutral: '#e7e7ea',
          'neutral-content': '#101012',
          'base-100': '#101012',
          'base-200': '#1a1a1d',
          'base-300': '#2a2a2e',
          'base-content': '#e7e7ea',
          info: '#a1a1aa',
          success: '#d4d4d8',
          warning: '#a1a1aa',
          error: '#e5e5e5',
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.375rem',
        },
      },
    ],
  },
}
