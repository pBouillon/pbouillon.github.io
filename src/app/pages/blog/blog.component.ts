import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article.model';
import { DevService } from 'src/app/core/services/dev.service';
import {
  CardComponent,
  CardPlaceholderComponent,
} from 'src/app/shared/components';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [
    CommonModule,
    HttpClientModule,
    CardComponent,
    CardPlaceholderComponent,
  ],
  providers: [DevService],
  templateUrl: './blog.component.html',
  styles: [':host { @apply flex-grow flex flex-col gap-8 py-8; }'],
})
export class BlogComponent implements OnInit {
  articles$: Observable<Article[]> = EMPTY;

  constructor(private readonly devService: DevService) {}

  ngOnInit(): void {
    this.articles$ = this.devService.getArticles(5);
  }
}
