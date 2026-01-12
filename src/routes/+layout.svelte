<script lang="ts">
  import { page } from '$app/state';
  import BrutFooter from '$lib/components/BrutFooter.svelte';
  import BrutNav from '$lib/components/BrutNav.svelte';
  import { m } from '$lib/paraglide/messages';
  import { locales, localizeHref } from '$lib/paraglide/runtime';
  import '../app.css';

  let { children } = $props();
  const seoDescription = `${m.page_description()} ${m.introduction()}`;
</script>

<svelte:head>
  <title>{m.page_title()}</title>
  <meta name="description" content={seoDescription} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://pbouillon.github.io/" />
  <meta property="og:title" content={m.page_title()} />
  <meta property="og:description" content={m.page_description()} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="pbouillon.github.io" />
  <meta property="twitter:url" content="https://pbouillon.github.io/" />
  <meta name="twitter:title" content={m.page_title()} />
  <meta name="twitter:description" content={m.page_description()} />
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
