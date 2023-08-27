<script lang="ts">
  import { t } from '$lib/translations';

  import IconLink from '$lib/components/icon-link.svelte';

  type HeroLink = {
    href: string;
    iconName: string;
    target?: string;
  };

  const heroLinks: HeroLink[] = [
    {
      href: 'https://linkedin.com/in/pierre-bouillon',
      iconName: 'bi-linkedin',
    },
    {
      href: 'https://github.com/pbouillon',
      iconName: 'bi-github',
    },
    {
      href: '/resume.pdf',
      iconName: 'bi-file-earmark-text',
    },
  ];
</script>

<svelte:head>
  <title>{$t('home.tab_title')}</title>
</svelte:head>

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <section class="max-w-md">
      <img
        src="me.jpg"
        class="mx-auto my-12 h-52 w-52 rounded-full shadow"
        alt="Profile"
      />
      <h1 class="text-5xl font-bold">{$t('home.title')}</h1>
      <p class="py-6 text-2xl">{$t('home.introduction')}</p>

      <div class="divider" />

      <div class="space-x-3 lg:space-x-5">
        {#each heroLinks as link}
          <IconLink {...link} />
        {/each}
      </div>
    </section>
  </div>
</div>
