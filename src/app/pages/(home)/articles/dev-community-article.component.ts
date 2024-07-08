import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BootstrapIconDirective } from '../../../utils/icons';
import { DevCommunityArticle } from './dev-community-article';

@Component({
  selector: 'app-dev-community-article',
  standalone: true,
  imports: [NgOptimizedImage, BootstrapIconDirective, DatePipe],
  template: `
    <a [href]="article().url" target="_blank" class="group/article">
      <article class="grid gap-2 sm:grid-cols-12 sm:gap-6">
        <figure class="relative -translate-x-1 sm:col-span-4 sm:pt-3">
          <div
            class="absolute h-full w-full rounded bg-teal-500/40 sm:h-[64px]"
          ></div>
          <img
            [ngSrc]="article().cover_image"
            [alt]="article().title + 'cover image'"
            priority
            width="500"
            height="210"
            class="-translate-y-2 translate-x-2 rounded border border-teal-500 group-hover/article:-translate-y-2 group-hover/article:translate-x-2 lg:-translate-y-0 lg:translate-x-0 lg:transition-transform"
          />
        </figure>

        <div class="space-y-2 group-hover/article:text-teal-600 sm:col-span-8">
          <h3 class="text-base font-semibold capitalize">
            {{ article().title }}
          </h3>

          <p class="text-sm text-slate-500">{{ article().description }}</p>

          <div class="mt-2 flex gap-5 sm:mt-4">
            <div class="inline-flex gap-2 text-xs text-slate-500">
              <i bootstrapIcon="calendar"></i>
              <p>{{ article().published_at | date }}</p>
            </div>

            <div class="inline-flex gap-2 text-xs text-slate-500">
              <i bootstrapIcon="hourglass-split"></i>
              <p>{{ article().reading_time_minutes }} min.</p>
            </div>
          </div>
        </div>
      </article>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevCommunityArticleComponent {
  readonly article = input.required<DevCommunityArticle>();
}
