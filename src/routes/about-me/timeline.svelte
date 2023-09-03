<script lang="ts">
  import TimelineItem from './timeline-item.svelte';

  export let items: {
    icon: string;
    title: string;
    period: string;
    content: string;
  }[] = [];
</script>

<ol class="border-l-base relative mb-20 list-none border-l-2">
  {#each items as item}
    <TimelineItem {...item} />
  {/each}
</ol>
