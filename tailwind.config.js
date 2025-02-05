/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'nabla': ["'Viga'", 'system-ui'],
        'league-spartan': ["'League Spartan Variable'", 'system-ui'],
        'inter': ['Inter', 'system-ui']
      },
      boxShadow: {
        'around': '0px 0px 10px 0 rgb(0 0 0 / 0.1)'
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '1rem',
      'full': '9999px',
    }
  },
  plugins: [],
}

