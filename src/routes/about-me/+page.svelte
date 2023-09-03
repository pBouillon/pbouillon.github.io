<script lang="ts">
  import { t } from '$lib/translations';
  import Page from '$lib/layouts/page.svelte';
</script>

<svelte:head>
  <title>{$t('blog.tab_title')}</title>
</svelte:head>

<Page>
  <h1>{$t('about_me.title')}</h1>

  <div
    class="flex flex-col items-center lg:flex-row-reverse lg:justify-between"
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
</Page>
