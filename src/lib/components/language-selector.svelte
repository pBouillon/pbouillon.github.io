<script lang="ts">
  import { onMount } from 'svelte';

  import { locale, setLocale } from '$lib/translations';

  let selectedLocale: string;

  const locales = [
    { value: 'en', name: 'English' },
    { value: 'fr', name: 'Français' },
  ];

  onMount(() => (selectedLocale = $locale));

  async function updateLocale(locale: string): Promise<void> {
    await setLocale(locale)?.then(() =>
      localStorage?.setItem('preferredLocale', locale)
    );
  }
</script>

<select
  class="select select-ghost w-full lg:w-36"
  bind:value={selectedLocale}
  on:change={() => updateLocale(selectedLocale)}
>
  {#each locales as { value, name }}
    <option {value} selected={$locale === value}>{name}</option>
  {/each}
</select>
