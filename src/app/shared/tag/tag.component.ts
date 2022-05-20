import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `
    <span class="px-2 py-1 font-mono text-xs rounded-lg bg-slate-200 dark:text-slate-700"
    >
      {{ tag }}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input()
  tag!: string;
}
