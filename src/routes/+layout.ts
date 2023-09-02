import { browser } from '$app/environment';
import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

// Configure SSR - https://kit.svelte.dev/docs/adapter-static#usage
export const prerender = true;

export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url;
  const initLocale = getInitialLocale();

  await loadTranslations(initLocale, pathname);

  return { locale: initLocale, route: pathname };
};

function getInitialLocale(): string {
  if (!browser) return 'fr';

  try {
    return window.navigator.language.split('-')[0];
  } catch (e) {
    return 'en';
  }
}
