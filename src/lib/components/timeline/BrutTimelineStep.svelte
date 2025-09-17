<script lang="ts">
  import BrutTimelineConnector from './BrutTimelineConnector.svelte';
  import BrutTimelineEventCard from './BrutTimelineEventCard.svelte';

  let { event, isLast = false } = $props<{
    event: TimelineEvent;
    isLast?: boolean;
  }>();
</script>

<div class="flex gap-5">
  <BrutTimelineConnector
    isWorkRelated={event.isWorkRelated}
    isCurrentExperience={!event.endDate}
  />

  <BrutTimelineEventCard {event} {isLast} />
</div>
