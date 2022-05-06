import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { DevArticle } from 'src/app/core/models/dev-article.model';
import { DevService } from 'src/app/core/services/dev.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  articles$: Observable<DevArticle[]> = EMPTY;

  constructor(private readonly devService: DevService) {}

  ngOnInit(): void {
    this.articles$ = this.devService.getArticles();
  }
}
