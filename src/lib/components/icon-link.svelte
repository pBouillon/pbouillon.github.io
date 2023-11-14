<script lang="ts">
  export let href: string | undefined;
  export let iconName: string | undefined;
  export let target = '_blank';
</script>

<a
  {href}
  {target}
  aria-label="{iconName} icon"
  class="btn btn-square btn-ghost text-3xl uppercase lg:btn-lg lg:text-5xl"
>
  <i class="bi {iconName}" />
</a>
