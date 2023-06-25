<script lang="ts">
  export let title: string;
  export let href: string;
  export let isExternal: boolean = false;
</script>

<a {href} target={isExternal ? '_blank' : '_self'}>
  {title}
  {#if isExternal}
    <i class="bi bi-box-arrow-up-right" />
  {/if}
</a>
