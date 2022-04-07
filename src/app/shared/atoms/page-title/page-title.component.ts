import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
  /**
   * The title of the page
   */
  @Input()
  title: string = '';

  /**
   * The subtitle of the page
   */
  @Input()
  subtitle: string = '';
}
