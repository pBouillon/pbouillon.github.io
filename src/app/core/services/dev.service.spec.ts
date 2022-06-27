import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Article } from '../models/article.model';
import { DevService } from './dev.service';

describe('DevService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: DevService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new DevService(httpClientSpy);
  });

  it('should return expected articles', (done: DoneFn) => {
    const expectedArticles: Article[] = [
      {
        url: 'url1',
        title: 'title1',
        description: 'description1',
        published_at: new Date(),
        tags: ['tag1', 'tag2'],
      },
      {
        url: 'url2',
        title: 'title2',
        description: 'description2',
        published_at: new Date(),
        tags: ['tag3', 'tag4'],
      },
    ];

    const rawArticles: any[] = expectedArticles.map(article => ({...article, tags: article.tags.join(',')}))

    httpClientSpy.get.and.returnValue(of(rawArticles));

    service.getArticles(expectedArticles.length).subscribe({
      next: (articles) => {
        expect(articles)
          .withContext('expected articles')
          .toEqual(expectedArticles);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
