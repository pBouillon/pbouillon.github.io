<script lang="ts">
  import type { TimelineEvent } from '$lib/components/timeline/timeline-event';
  import TimelineItem from '$lib/components/timeline/timeline-item.svelte';
  import Timeline from '$lib/components/timeline/timeline.svelte';
  import Page from '$lib/layouts/page.svelte';
  import { t } from '$lib/translations';

  const companies = ['lombard_odier', 'ul', 'docaposte'];

  $: timelineEvents = companies
    .map((name: string) => `about_me.experiences.${name}`)
    .map(
      (prefix): TimelineEvent => ({
        icon: `${prefix}.icon`,
        description: `${prefix}.description`,
        location: `${prefix}.location`,
        period: `${prefix}.period`,
        title: `${prefix}.title`,
      })
    );
</script>

<svelte:head>
  <title>{$t('blog.tab_title')}</title>
</svelte:head>

<Page>
  <h1>{$t('about_me.title')}</h1>

  <div
    class="flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-16"
  >
    <img
      src="me.jpg"
      class="mx-auto h-52 w-52 rounded-full shadow"
      alt="Profile"
    />

    <p class="prose-lg col-span-3 max-w-xl whitespace-pre-line">
      {@html $t('about_me.introduction')}
    </p>
  </div>

  <h2>Mon parcours</h2>

  <div class="ml-5">
    <Timeline events={timelineEvents} />
  </div>
</Page>
