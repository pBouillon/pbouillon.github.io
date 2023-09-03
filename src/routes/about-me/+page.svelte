<script lang="ts">
  import { t } from '$lib/translations';
  import Page from '$lib/layouts/page.svelte';
  import Timeline from './timeline.svelte';

  const timelineEvents = [
    {
      icon: 'bi bi-bank',
      title: 'Lorem Ipsum',
      period: '2022 - Now',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente totam veritatis minima quidem in, nam similique aut possimus!',
    },
    {
      icon: 'bi bi-person-vcard',
      period: '2019 - 2022',
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente totam veritatis minima quidem in, nam similique aut possimus!',
    },
  ];
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
      {$t('about_me.introduction')}
    </p>
  </div>

  <h2>Mon parcours</h2>

  <div class="ml-5">
    <Timeline items={timelineEvents} />
  </div>
</Page>
