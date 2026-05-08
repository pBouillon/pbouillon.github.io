export interface Article {
  url: string;
  title: string;
  description: string;
  published_at: Date;
  tag_list: string[];
}

export const isArticle = (item: unknown): item is Article => {
  if (typeof item !== 'object' || item === null) return false;

  const article = item as Article;

  const hasUrl = 'url' in article && typeof article.url === 'string';
  if (!hasUrl) return false;

  const hasTitle = 'title' in article && typeof article.title === 'string';
  if (!hasTitle) return false;

  const hasDescription =
    'description' in article && typeof article.description === 'string';
  if (!hasDescription) return false;

  const hasPublishedAt =
    'published_at' in article && typeof article.published_at === 'string';
  if (!hasPublishedAt) return false;

  const hasTagList = 'tag_list' in article && Array.isArray(article.tag_list);
  if (!hasTagList) return false;

  const hasValidTags = article.tag_list.every((tag) => typeof tag === 'string');
  if (!hasValidTags) return false;

  return true;
};
