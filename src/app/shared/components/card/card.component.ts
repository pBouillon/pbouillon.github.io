import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';

@Component({
  standalone: true,
  selector: 'app-card',
  imports: [CommonModule, TagComponent],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  description!: string;

  @Input()
  createdOn?: Date;

  @Input()
  targetUrl!: string;

  @Input()
  tags: string[] = [];

  @Input()
  title!: string;
}
