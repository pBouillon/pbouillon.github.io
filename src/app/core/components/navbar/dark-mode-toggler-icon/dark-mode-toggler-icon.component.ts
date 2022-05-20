import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggler-icon',
  templateUrl: './dark-mode-toggler-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeTogglerIconComponent {
  /**
   * Whether the dark mode is enabled or not
   */
  @Input()
  isDarkModeEnabled: boolean = false;

  /**
   * Emitted when the user clicks to toggle the dark mode
   */
  @Output()
  onToggleDarkMode = new EventEmitter<void>();
}
