import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education-timeline-item',
  standalone: true,
  host: { class: 'py-3' },
  template: `
    <span
      class="absolute -start-[7.5px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-slate-100 bg-teal-400"
    ></span>

    <p class="text-sm text-gray-400">
      Graduated <ng-content select="[graduation]" />
    </p>

    <ng-content select="[degree]" />

    <p class="text-gray-400">
      <ng-content select="[school]" />
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationTimelineItemComponent {}
