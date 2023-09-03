<script lang="ts">
  import { t } from '$lib/translations';

  export let icon: string;
  export let title: string;
  export let period: string;
  export let content: string;
</script>

<li>
  <span
    class="absolute -left-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral text-neutral-content lg:-left-6 lg:h-12 lg:w-12 lg:text-lg"
  >
    <i class={icon} />
  </span>

  <h3 class="my-0">{title}</h3>

  <span class="text-sm">{$t(period)}</span>

  <p>{$t(content)}</p>
</li>
