import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarLink } from 'src/app/core/models/navbar-link.model';
import { DarkModeTogglerIconComponent } from '../dark-mode-toggler-icon/dark-mode-toggler-icon.component';
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterModule,
    DarkModeTogglerIconComponent,
    NavbarLinkComponent,
  ],
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
