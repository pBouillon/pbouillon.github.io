<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  import type { Article } from './article';

  let { article }: { article: Article } = $props();

  const dateLocale = $derived<Intl.LocalesArgument>(
    getLocale() === 'fr' ? 'fr-FR' : 'en-GB',
  );

  const toShortDate = (date: Date): string =>
    Intl.DateTimeFormat(dateLocale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date);
</script>

<a href={article.url}>
  <article
    class="group relative rounded border-3 border-border bg-background shadow-shadow transition-all hover:translate-0.5 hover:opacity-90 hover:shadow-none md:h-52"
  >
    <header
      class="relative border-b-3 border-border bg-secondary-background p-5 text-secondary-foreground md:h-24"
    >
      <h3 class="mb-1 text-sm font-semibold">
        {article.title}
      </h3>

      <span class="text-xs">{toShortDate(article.published_at)}</span>

      <div
        class="absolute -bottom-3 left-4 h-0 w-0
              border-t-[12px] border-r-[12px]
              border-l-[12px] border-border
              border-r-transparent border-l-transparent"
      ></div>
    </header>

    <div class="space-y-3 px-5 pt-6 pb-4 text-sm">
      <p class=" leading-relaxed">
        {article.description}
      </p>
    </div>

    <div
      class="absolute right-0 bottom-0 -z-10 flex w-36 items-baseline justify-between border-3 bg-accent-background px-3 py-2 text-accent-foreground transition-all group-hover:z-10 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-shadow"
    >
      <span class="text-xs uppercase">{m.article_cta_see_more()}</span>
      <i class="bi bi-arrow-right"></i>
    </div>
  </article>
</a>
