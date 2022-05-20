import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  description!: string;

  @Input()
  targetUrl!: string;

  @Input()
  tags: string[] = [];

  @Input()
  title!: string;

  navigateToTarget(): void {
    window.location.href = this.targetUrl;
  }
}
