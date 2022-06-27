import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar-link',
  imports: [CommonModule],
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

  constructor(
    private readonly _router: Router,
  ) { }

  navigateToUrl(): void {
    if (this.isExternal) {
      window.open(this.href, '_blank');
    } else {
      this._router.navigate([this.href]);
    }
  }
}
