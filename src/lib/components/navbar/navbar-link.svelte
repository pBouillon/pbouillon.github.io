<script lang="ts">
  import { page } from '$app/stores';
  import { t } from '$lib/translations';

  export let title: string;
  export let href: string;
  export let isExternal: boolean = false;

  $: path = $page.url.pathname;
  $: target = isExternal ? '_blank' : '';
</script>

<a {href} class:active={path === href} {target}>
  {$t(title)}
  {#if isExternal}
    <i class="bi bi-box-arrow-up-right" />
  {/if}
</a>
