<script lang="ts">
  import type { TimelineEvent } from './timeline-event';
  import TimelineItem from './timeline-item.svelte';

  export let events: TimelineEvent[] = [];
</script>

<ol class="border-l-base relative list-none border-l-2">
  {#each events as event}
    <TimelineItem {event} />
  {/each}
</ol>
