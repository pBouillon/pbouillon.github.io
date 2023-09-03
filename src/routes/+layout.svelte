<script lang="ts">
  import '../app.css';

  import { onMount } from 'svelte';

  import { browser } from '$app/environment';
  import { page } from '$app/stores';

  import { themeChange } from 'theme-change';

  import KonamiCode from '$lib/components/konami-code.svelte';
  import Navbar from '$lib/components/navbar/navbar.svelte';
  import { loadTranslations } from '$lib/translations';

  onMount(async () => {
    themeChange(false);

    const { pathname } = $page.url;
    const preferredLocale = getPreferredLocale();

    await loadTranslations(preferredLocale, pathname);
  });

  function getPreferredLocale(): string {
    if (!browser) return 'en';

    try {
      return (
        localStorage?.preferredLocale || window.navigator.language.split('-')[0]
      );
    } catch (e) {
      return 'en';
    }
  }
</script>

<Navbar />

<KonamiCode />

<slot />
