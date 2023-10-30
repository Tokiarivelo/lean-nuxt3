import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: [
    'docs/content/**/*.md',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      default: ['PT Serif', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {
      colors: {
        'white-tunnel': 'white',
        'orange-tunnel': '#FFB62D',
        'green-tunnel': '#00C397',
        'gray-blue-tunnel': '#F5FBFF',
        'gray-dark-tunnel': '#273444',
        'gray-tunnel': 'rgba(58, 53, 87)',
        'gray-light-tunnel': 'rgba(58, 53, 87, 0.05)',
        'purple-dark-tunnel': '#3A3557',
        'dark-bg-tunnel': '#1e1e20',
        'dark-white-tunnel': '#fffff5db',
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
    containerQueries,
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.btn-primary': {
          backgroundColor: theme('colors.green-tunnel'),
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          color: 'white',
          '&:hover': {
            backgroundColor: theme('colors.orange-tunnel'),
          },
        },
        '.btn-disable': {
          backgroundColor: '#20234433',
          color: 'white',
        },
      });
    }),
  ],
} satisfies Config;
