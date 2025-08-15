<script lang="ts">
  import BrutTimelineConnector from './BrutTimelineConnector.svelte';
  import BrutTimelineEventCard from './BrutTimelineEventCard.svelte';

  let {
    event,
    isLast = false,
  }: {
    event: TimelineEvent;
    isLast?: boolean;
  } = $props();
</script>

<div class="flex gap-5">
  <BrutTimelineConnector isWorkRelated={event.isWorkRelated} />
  <BrutTimelineEventCard {event} {isLast} />
</div>
