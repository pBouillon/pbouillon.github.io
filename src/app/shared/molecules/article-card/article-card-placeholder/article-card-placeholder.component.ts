import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-article-card-placeholder',
  template: `
    <div
      class="max-w-md mx-auto p-5 space-y-4 bg-white border rounded shadow dark:bg-gray-600"
    >
      <div class="flex justify-center">
        <span class="text-placeholder h-4 w-1/2"></span>
      </div>

      <hr />

      <span class="text-placeholder h-3 w-full"></span>
      <span class="text-placeholder h-3 w-full"></span>
      <span class="text-placeholder h-3 w-full"></span>

      <div class="flex gap-3">
        <span
          *ngFor="let _ of [0, 1, 2]"
          class="text-placeholder h-3 w-10"
        ></span>
      </div>
    </div>
  `,
  styles: ['.text-placeholder { @apply block rounded bg-gray-400 animate-pulse; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCardPlaceholderComponent {}
