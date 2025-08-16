<script lang="ts">
  import { onMount } from 'svelte';
  import BrutAdaptiveButton from './BrutAdaptiveButton.svelte';

  const supportedThemes = ['light', 'dark'] as const;
  type Theme = (typeof supportedThemes)[number];

  const defaultTheme: Theme = 'light';

  const themePreferenceStoreKey = 'theme';

  let theme = $state<Theme | null>(null);

  // Saves the preferred theme to local storage
  $effect(() => {
    if (!theme) return;
    localStorage.setItem(themePreferenceStoreKey, theme);
  });

  // Reflect the new theme to the document's class
  $effect(() => {
    document.documentElement.classList.toggle('theme-transitioning');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setTimeout(
      () => document.documentElement.classList.toggle('theme-transitioning'),
      300,
    );
  });

  onMount(() => {
    theme = getPreferredColorTheme();

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const hasEnabledDarkModePreference = event.matches;
        theme = hasEnabledDarkModePreference ? 'dark' : 'light';
      });
  });

  const isColorTheme = (value: string): value is Theme => {
    return supportedThemes.includes(value as Theme);
  };

  const getPreferredColorTheme = (): Theme => {
    const stored = localStorage.getItem(themePreferenceStoreKey);
    if (stored) {
      return isColorTheme(stored) ? stored : defaultTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };
</script>

<BrutAdaptiveButton
  shape="icon"
  variant="secondary"
  onclick={() => (theme = theme === 'dark' ? 'light' : 'dark')}
>
  <i class="bi {theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars'}"></i>
</BrutAdaptiveButton>
