import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TrackSectionVisibilityDirective } from '../../../utils/track-section-visibility';
import { EducationTimelineItemComponent } from './education-timeline-item.component';
import { EducationTimelineComponent } from './education-timeline.component';

@Component({
    selector: 'app-education',
    imports: [
        TrackSectionVisibilityDirective,
        EducationTimelineComponent,
        EducationTimelineItemComponent,
    ],
    template: `
    <section
      trackSectionVisibility
      id="education"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:text-lg"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0"
      >
        <h2 class="text-sm font-semibold uppercase tracking-widest">
          Education
        </h2>
      </div>

      <app-education-timeline>
        <app-education-timeline-item>
          <span graduation>2021</span>
          <p degree>M.Sc. Computer Science</p>
          <p school>TELECOM Nancy, France</p>
        </app-education-timeline-item>

        <app-education-timeline-item>
          <span graduation>2018, with honors</span>
          <p degree>M.Sc. Computer Science</p>
          <p school>Université de Lorraine, France</p>
        </app-education-timeline-item>

        <app-education-timeline-item>
          <span graduation>2017</span>
          <p degree>B.Sc. Computer Science</p>
          <p school>Université de Belfort-Montbéliard, France</p>
        </app-education-timeline-item>
      </app-education-timeline>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {}
