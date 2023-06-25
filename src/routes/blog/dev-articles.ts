import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

interface DevArticle {
  cover_image: string;
  description: string;
  published_at: Date;
  tag_list: string;
  title: string;
  url: string;
}

export interface Article {
  coverImage: string;
  description: string;
  publishedAt: Date;
  tags: string;
  title: string;
  url: string;
}

const BASE_URL = 'https://dev.to/api';

const toArticle = (article: DevArticle): Article => ({
  ...article,
  tags: article.tag_list,
  coverImage: article.cover_image,
  publishedAt: article.published_at,
});

export function getArticles(perPage: number): Writable<Article[]> {
  const articles: Writable<Article[]> = writable([]);

  fetch(`${BASE_URL}/articles?username=pbouillon&per_page=${perPage}`)
    .then((response) => response.json())
    .then((articlesData: DevArticle[]) => {
      const mappedArticles = articlesData.map(toArticle);
      articles.set(mappedArticles);
    })
    .catch((error) => {
      console.error('Error retrieving articles: ', error);
      articles.set([]);
    });

  return articles;
}
