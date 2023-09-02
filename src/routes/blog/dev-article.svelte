<script lang="ts">
  import LazyLoadedImage from '$lib/components/lazy-loaded-image.svelte';
  import { t } from '$lib/translations';
  import type { Article } from './dev-articles';

  export let article: Article;
</script>

<article class="card my-5 w-96 rounded-lg border border-primary shadow-xl">
  <figure>
    <LazyLoadedImage src={article.coverImage} alt={article.title} />
  </figure>

  <div class="card-body">
    <div class="flex justify-evenly">
      {#each article.tags as tag}
        <div class="badge badge-outline">{tag}</div>
      {/each}
    </div>

    <h2 class="card-title">{article.title}</h2>

    <p>{article.description}</p>

    <div class="card-actions justify-end pt-3">
      <a href={article.url} target="_blank" class="btn btn-primary"
        >{$t('blog.read_article')} <i class="bi bi-arrow-right" /></a
      >
    </div>
  </div>
</article>
