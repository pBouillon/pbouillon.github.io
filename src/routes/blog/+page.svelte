<script lang="ts">
  import { onMount } from 'svelte';

  import Page from '$lib/layouts/page.svelte';

  import DevArticle from './dev-article.svelte';
  import { getArticles, type Article } from './dev-articles';

  const articlesPerPage = 10;

  let loadingArticles: Promise<Article[]> | undefined;

  onMount(() => {
    loadingArticles = getArticles(articlesPerPage);
  });
</script>

<Page>
  <h1>Blog</h1>

  <p>
    Voici un résumé des articles que j'écris périodiquement sur la plateforme <a
      href="https://dev.to/pbouillon"
      target="_blank">DEV</a
    > où je partage mes réflexions, découvertes et retours d'expérience.
  </p>

  <p>
    N'hésitez pas à y jeter un œil et y laisser commentaires et suggestions. Je
    serai ravis de partager mes connaissances et d'échanger avec vous.
  </p>
</Page>

{#await loadingArticles}
  <!-- TODO - Loading -->
{:then articles}
  <div
    class="mx-auto grid max-w-4xl grid-cols-1 justify-items-center lg:grid-cols-2"
  >
    {#each articles || [] as article}
      <DevArticle {article} />
    {/each}
  </div>
{:catch error}
  <!-- TODO - Error -->
{/await}
