<script lang="ts">
  import { onMount } from 'svelte';

  import { t } from '$lib/translations';
  import Page from '$lib/layouts/page.svelte';

  import DevArticle from './dev-article.svelte';
  import LoadingDevArticle from './loading-dev-article.svelte';
  import ReadOnDevLink from './read-on-dev-link.svelte';
  import { getArticles, type Article } from './dev-articles';

  const articlesPerPage = 6;

  let loadingArticles: Promise<Article[]> | undefined;

  onMount(() => {
    loadingArticles = getArticles(articlesPerPage);
  });
</script>

<svelte:head>
  <title>{$t('blog.tab_title')}</title>
</svelte:head>

<Page>
  <h1>{$t('blog.title')}</h1>
  <p>${$t('blog.content')}</p>
</Page>

<ReadOnDevLink />

{#await loadingArticles}
  <div
    class="mx-auto grid max-w-4xl grid-cols-1 justify-items-center lg:grid-cols-2"
  >
    <LoadingDevArticle />
    <LoadingDevArticle />
  </div>
{:then articles}
  <div
    class="mx-auto grid max-w-4xl grid-cols-1 justify-items-center lg:grid-cols-2"
  >
    {#each articles || [] as article}
      <DevArticle {article} />
    {/each}
  </div>

  <ReadOnDevLink />
{:catch}
  <p
    class="prose mx-auto text-center text-sm text-secondary lg:prose-xl lg:text-base"
  >
    {$t('blog.loading_failed')}
  </p>
{/await}
