<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const isDarkThemeSet = writable<boolean>(false);
  $: themeIcon = $isDarkThemeSet ? 'bi-sun' : 'bi-moon';

  onMount(() => {
    const preferredTheme = localStorage.getItem('theme');
    const isDarkThemePreferred = preferredTheme === 'dark';

    isDarkThemeSet.set(isDarkThemePreferred);
  });
</script>

<button
  data-toggle-theme="winter,dark"
  data-act-class="ACTIVECLASS"
  type="button"
  class="btn btn-square btn-ghost"
  on:click={() => isDarkThemeSet.update((isSet) => !isSet)}
>
  <i class="bi bi-moon {themeIcon}" />
</button>
