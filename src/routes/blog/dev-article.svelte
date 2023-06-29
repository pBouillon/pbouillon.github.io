<script lang="ts">
  import LazyLoadedImage from '$lib/components/lazy-loaded-image.svelte';
  import type { Article } from './dev-articles';

  export let article: Article;
</script>

<article
  class="card my-5 w-96 bg-base-100 shadow-xl hover:ring hover:ring-primary-focus"
>
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
      <a href={article.url} target="_blank" class="btn-primary btn"
        >Lire l'article</a
      >
    </div>
  </div>
</article>
