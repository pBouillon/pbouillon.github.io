import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-placeholder',
  templateUrl: './card-placeholder.component.html',
  styles: [
    '.text-placeholder { @apply block rounded bg-gray-400 animate-pulse; }',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlaceholderComponent {}
