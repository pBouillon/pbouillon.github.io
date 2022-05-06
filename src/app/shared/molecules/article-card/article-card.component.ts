import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCardComponent {
  /**
   * The article to be displayed
   */
  @Input()
  article!: Article;

  /**
   * Whether the link is hovered or not
   */
  isHovered: boolean = false;

  navigateToArticle(): void {
    window.location.href = this.article.url;
  }
}
