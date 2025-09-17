<script lang="ts">
  import { m } from '$lib/paraglide/messages';

  const { event, isLast = false } = $props<{
    event: TimelineEvent;
    isLast: boolean;
  }>();
</script>

<article
  class="relative mr-1 grow rounded border-3 border-border bg-accent-background px-5 py-4 text-accent-foreground md:mr-0 {isLast
    ? 'mb-0'
    : 'mb-8'}"
>
  <p
    class="absolute top-0 right-0 inline-flex w-fit translate-x-3 -translate-y-3 rotate-10 items-center justify-center gap-1 rounded-bl border-3 border-border bg-secondary-background p-2 text-sm text-secondary-foreground shadow-shadow"
  >
    {#if !event.endDate}
      <time datetime={event.startDate}
        >{m.timeline_date_since({ date: event.startDate })}</time
      >
    {:else}
      <time datetime={event.startDate}>{event.startDate}</time>
      <span>-</span>
      <time datetime={event.endDate}>{event.endDate}</time>
    {/if}
  </p>

  <hgroup>
    <h3 class="mr-18 grow font-bold sm:mr-0">{event.title}</h3>
    <p class="grow text-sm empty:hidden">{event.subtitle}</p>
  </hgroup>

  <p class="mt-4 text-sm leading-snug">{event.description}</p>
</article>
