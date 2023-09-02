/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  important: true,

  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: ['winter', 'dark'],
    darkTheme: 'dark',
    logs: false,
  },
};
