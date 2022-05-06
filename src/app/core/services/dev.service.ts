import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DevArticle } from '../models/dev-article.model';

@Injectable({
  providedIn: 'root',
})
export class DevService {
  private readonly BASE_URL = 'https://dev.to/api';

  constructor(private readonly http: HttpClient) {}

  getArticles(): Observable<DevArticle[]> {
    return this.http.get<DevArticle[]>(
      `${this.BASE_URL}/articles?username=pbouillon`
    );
  }
}
