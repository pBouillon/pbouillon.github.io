import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggler-selector',
  templateUrl: './dark-mode-toggler-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkModeTogglerSelectorComponent {
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

  /**
   * Emitted when the user clicks to toggle the dark mode
   * @param theme The value of the theme requested by the user
   */
  onThemeSelected(theme: string): void {
    const hasValueChanged =
      (theme === 'light' && this.isDarkModeEnabled)
      || (theme === 'dark' && !this.isDarkModeEnabled);

    if (hasValueChanged) {
      this.onToggleDarkMode.emit();
    }
  }
}
