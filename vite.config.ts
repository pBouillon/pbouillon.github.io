import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      strategy: ['url', 'preferredLanguage'],
      urlPatterns: [
        {
          pattern: '/:path(.*)?',
          localized: [
            ['fr', '/fr/:path(.*)?'],
            ['en', '/:path(.*)?'],
          ],
        },
      ],
    }),
    sveltekit({
      preprocess: [vitePreprocess(), mdsvex()],
      extensions: ['.svelte', '.svx'],
      compilerOptions: { runes: true },
      adapter: adapter(),
      prerender: { handleHttpError: 'ignore' },
    }),
    tailwindcss(),
  ],
});
