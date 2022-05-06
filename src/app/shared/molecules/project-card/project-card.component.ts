import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectSummary } from 'src/app/core/models/project-summary.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  /**
   * The description of the project wrapped in this card
   */
  @Input()
  summary!: ProjectSummary;

  /**
   * Whether the link is hovered or not
   */
  isHovered: boolean = false;
}
