import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: 'navbar-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLinkComponent {
  /**
   * The URL targeted by the link
   */
  @Input()
  href: string = '';

  /**
   * The displayed label of the link
   */
  @Input()
  label: string = '';

  /**
   * Whether the link targets another website or not
   */
  @Input()
  isExternal: boolean = false;

  /**
   * Whether the link is hovered or not
   */
  isHovered: boolean = false;
}
