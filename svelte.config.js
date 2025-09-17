import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        const isBasePathError =
          path === '/' && message.includes('does not begin with `base`');

        if (isBasePathError) {
          return;
        }

        throw new Error(message);
      },
    },
  },
  extensions: ['.svelte', '.svx'],
  compilerOptions: { runes: true },
  trailingSlash: 'never',
};

export default config;
