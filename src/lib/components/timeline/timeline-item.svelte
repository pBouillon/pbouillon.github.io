<script lang="ts">
  import { t } from '$lib/translations';

  import type { TimelineEvent } from './timeline-event';

  export let event: TimelineEvent;
</script>

<li>
  <span
    class="absolute -left-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral text-neutral-content ring-8 ring-base-100 lg:-left-5 lg:h-10 lg:w-10 lg:text-lg"
  >
    <i class={$t(event.icon)} />
  </span>

  <h3 class="my-0">{$t(event.title)}</h3>

  <a class="my-0 text-sm font-semibold" href={$t(event.contextUrl)}
    >{$t(event.location)}</a
  >

  <p class="my-1 text-xs">{$t(event.period)}</p>

  <p class="prose-sm mb-8 mt-3">{@html $t(event.description)}</p>
</li>
