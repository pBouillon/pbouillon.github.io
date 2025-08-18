<script lang="ts">
  import { page } from '$app/state';
  import BrutFooter from '$lib/components/BrutFooter.svelte';
  import BrutNav from '$lib/components/BrutNav.svelte';
  import { m } from '$lib/paraglide/messages';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>{m.page_title()}</title>
</svelte:head>

<BrutNav />

{@render children?.()}

<BrutFooter />

<!-- https://inlang.com/m/gerre34r/library-inlang-paraglideJs/sveltekit#static-site-generation-ssg -->
<div class="hidden">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>
