<script lang="ts">
  import '../app.css';

  import { onMount } from 'svelte';

  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { onNavigate } from '$app/navigation';

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

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
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

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
