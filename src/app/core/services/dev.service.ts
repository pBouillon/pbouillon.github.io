import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable()
export class DevService {
  private readonly BASE_URL = 'https://dev.to/api';

  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieve all articles that I have written on DEV
   * @returns A list of {@link DevArticle}
   */
  getArticles(perPage: number): Observable<Article[]> {
    const params = new HttpParams()
      .set('username', 'pbouillon')
      .set('per_page', perPage);

    return this.http
      .get<Article[]>(`${this.BASE_URL}/articles`, { params })
      .pipe(
        map((articles) =>
          articles.map((article: any) => ({
            ...article,
            tags: article.tags.split(','),
          }))
        )
      );
  }
}
