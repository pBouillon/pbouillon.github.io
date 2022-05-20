import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NavbarLink } from 'src/app/core/models/navbar-link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  /**
   * The title to be displayed inside the navbar
   */
  @Input()
  title: string = '';

  /**
   * Whether the dark mode is enabled or not
   */
  @Input()
  isDarkModeEnabled: boolean = false;

  /**
   * The links displayed in the navbar
   */
  @Input()
  links: NavbarLink[] = [];

  /**
   * Emitted when the burger menu is clicked
   */
  @Output()
  onBurgerMenuClicked = new EventEmitter<void>();

  /**
   * Emitted when the user clicks to toggle the dark mode
   */
  @Output()
  onToggleDarkMode = new EventEmitter<void>();
}
