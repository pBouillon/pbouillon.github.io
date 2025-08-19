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

  const isCurrentExperience = $derived<boolean>(
    new Date().getFullYear().toString() === event.endDate,
  );
</script>

<div class="flex gap-5">
  <BrutTimelineConnector
    isWorkRelated={event.isWorkRelated}
    {isCurrentExperience}
  />

  <BrutTimelineEventCard {event} {isLast} />
</div>
