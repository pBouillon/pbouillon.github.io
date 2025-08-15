<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { untrack } from 'svelte';
  import BrutAdaptiveButton from '../BrutAdaptiveButton.svelte';
  import { type Article, isArticle } from './article';
  import BrutArticle from './BrutArticle.svelte';

  type RequestStatus = 'loading' | 'settled' | 'error';

  let articles = $state<Article[]>([]);
  let status = $state<RequestStatus>('settled');

  let pagination = $state<{ perPage: number; pageIndex: number }>({
    pageIndex: 1,
    perPage: 4,
  });

  const searchParameters = $derived<URLSearchParams>(
    new URLSearchParams({
      username: 'pbouillon',
      page: pagination.pageIndex.toString(),
      per_page: pagination.perPage.toString(),
    }),
  );

  $effect(() => {
    const requestUrl = `https://dev.to/api/articles?${searchParameters}`;

    untrack(() => {
      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          if (!Array.isArray(data)) {
            return;
          }

          const fetchedArticles = data.filter(isArticle).map((item: any) => ({
            url: item.url,
            title: item.title,
            description: item.description,
            published_at: new Date(item.published_at),
          }));

          articles = [...articles, ...fetchedArticles];
          status = 'settled';
        })
        .catch(() => (status = 'error'));
    });
  });

  const loadMore = (): void => {
    ++pagination.pageIndex;
  };
</script>

<div
  class="mt-12 grid max-w-2xl grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-2 md:gap-12"
>
  {#each articles as article (article.url)}
    <BrutArticle {article} />
  {/each}
</div>

{#if typeof status === 'object' && 'error' in status}
  <div class="group">
    <BrutAdaptiveButton
      shape="lg"
      href="https://dev.to/pbouillon"
      target="_blank"
      rel="noopener"
    >
      <span class="text-lg">{m.articles_cta_go_to_source()}</span>
      <i
        class="bi bi-arrow-right pl-5 text-xl transition-transform group-hover:translate-x-3"
      ></i>
    </BrutAdaptiveButton>
  </div>
{:else}
  <div class="mt-12 flex items-center">
    <BrutAdaptiveButton
      shape="lg"
      onclick={loadMore}
      disabled={status !== 'settled'}
    >
      <span class="inline-flex gap-4 text-lg">
        {m.articles_cta_load_more()}
        <i class="bi bi-journal-arrow-down"></i>
      </span>
    </BrutAdaptiveButton>
  </div>
{/if}
