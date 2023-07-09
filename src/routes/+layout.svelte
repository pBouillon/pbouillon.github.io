<script>
  import '../app.css';

  import { onMount } from 'svelte';

  import { themeChange } from 'theme-change';

  import Navbar from '$lib/components/navbar.svelte';
  import KonamiCode from '$lib/components/konami-code.svelte';

  onMount(() => {
    themeChange(false);
  });
</script>

<Navbar />

<KonamiCode />

<slot />
