import i18n, { type Config } from 'sveltekit-i18n';

const config: Config<unknown> = {
  initLocale: 'en',
  loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (await import('./lang/en.json')).default,
    },
    {
      locale: 'fr',
      key: '',
      loader: async () => (await import('./lang/fr.json')).default,
    },
  ],
};

export const {
  t,
  loading,
  locales,
  locale,
  initialized,
  translations,
  loadTranslations,
} = new i18n(config);
