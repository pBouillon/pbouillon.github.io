<script lang="ts">
  import type { Article } from './dev-articles';

  export let article: Article;
</script>

<article class="card card-compact my-5 w-96 bg-neutral shadow-xl">
  <figure>
    <img src={article.coverImage} alt={article.title} />
  </figure>

  <div class="card-body">
    <div class="space-x-2">
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
