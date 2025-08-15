export interface Article {
  url: string;
  title: string;
  description: string;
  published_at: Date;
}

export const isArticle = (item: any): item is Article => {
  return (
    item &&
    typeof item.title === 'string' &&
    typeof item.description === 'string' &&
    typeof item.published_at === 'string' &&
    typeof item.url === 'string'
  );
};
