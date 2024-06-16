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
        contextUrl: `${prefix}.contextUrl`,
        period: `${prefix}.period`,
        title: `${prefix}.title`,
      })
    );
</script>

<svelte:head>
  <title>{$t('about_me.tab_title')}</title>
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

  <section class="mb-10">
    <h2>{$t('about_me.past_experiences')}</h2>

    <div class="ml-5">
      <Timeline events={timelineEvents} />
    </div>

    <div class="flex justify-center">
      <a href="/resume.pdf" class="btn btn-primary mx-auto w-1/2 uppercase">
        {$t('about_me.see_resume')}
        <i class="bi bi-file-earmark-text" />
      </a>
    </div>
  </section>
</Page>
