import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card-placeholder',
  imports: [CommonModule],
  templateUrl: './card-placeholder.component.html',
  styles: [
    '.text-placeholder { @apply block rounded bg-gray-400 animate-pulse; }',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPlaceholderComponent {}
