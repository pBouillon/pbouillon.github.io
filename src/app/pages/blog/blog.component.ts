import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article.model';
import { DevService } from 'src/app/core/services/dev.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  articles$: Observable<Article[]> = EMPTY;

  constructor(private readonly devService: DevService) {}

  ngOnInit(): void {
    this.articles$ = this.devService.getArticles(3);
  }
}
