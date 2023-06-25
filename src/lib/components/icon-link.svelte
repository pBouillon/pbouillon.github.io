<script lang="ts">
  export let href: string | undefined;
  export let iconName: string | undefined;
  export let target = '_blank';
</script>

<a
  {href}
  {target}
  class="btn-ghost btn-square btn text-3xl lg:btn-lg lg:text-5xl"
>
  <i class="bi {iconName}" />
</a>
