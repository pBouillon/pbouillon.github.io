type DevArticle = {
  cover_image: string;
  description: string;
  published_at: Date;
  tag_list: string[];
  title: string;
  url: string;
};

export type Article = {
  coverImage: string;
  description: string;
  publishedAt: Date;
  tags: string[];
  title: string;
  url: string;
};

const BASE_URL = 'https://dev.to/api';

/**
 * Converts a DevArticle object to an Article object.
 * @param {DevArticle} article - The DevArticle object to convert.
 * @returns {Article} - The converted Article object.
 */
const toArticle = (article: DevArticle): Article => ({
  ...article,
  tags: article.tag_list.sort().map((tag) => `#${tag}`),
  coverImage: article.cover_image,
  publishedAt: article.published_at,
});

/**
 * Retrieves a list of articles from the Dev.to API
 * @param {number} perPage - The number of articles to retrieve per page
 * @returns {Promise<Article[]>} - A Promise that resolves to an array of Article objects
 */
export async function getArticles(perPage: number): Promise<Article[]> {
  const response = await fetch(
    `${BASE_URL}/articles?username=pbouillon&per_page=${perPage}`
  );

  const devArticles = await response.json();

  return devArticles.map(toArticle);
}
