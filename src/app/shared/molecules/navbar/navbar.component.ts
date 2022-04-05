import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

type NavbarLink = {
  href: string;
  label: string;
  isExternal: boolean;
};

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
   * The links displayed in the navbar
   */
  @Input()
  links: NavbarLink[] = [];

  /**
   * Emitted when the burger menu is clicked
   */
  @Output()
  onBurgerMenuClicked = new EventEmitter<void>();
}
