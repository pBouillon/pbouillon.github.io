import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  /**
   * The article to be displayed
   */
  @Input()
  article!: Article;

  /**
   * Whether the link is hovered or not
   */
  isHovered: boolean = false;
}
