<script lang="ts">
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
  <title>Pierre Bouillon | Homepage</title>
</svelte:head>

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <section class="max-w-md">
      <img
        src="me.jpg"
        class="mx-auto my-12 h-52 w-52 rounded-full shadow"
        alt="Profile"
      />
      <h1 class="text-5xl font-bold">Pierre Bouillon</h1>
      <p class="py-6 text-2xl">Ingénieur logiciel Full Stack</p>

      <div class="divider" />

      <div class="space-x-3 lg:space-x-5">
        {#each heroLinks as link}
          <IconLink {...link} />
        {/each}
      </div>
    </section>
  </div>
</div>
