import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EducationTimelineItemComponent } from './education-timeline-item.component';

@Component({
  selector: 'app-education-timeline',
  standalone: true,
  imports: [EducationTimelineItemComponent],
  template: `
    <div class="relative flex flex-col gap-6 border-s border-gray-300 ps-8">
      <ng-content select="app-education-timeline-item" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationTimelineComponent {}
