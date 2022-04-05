import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  template: `
    <a
      class="flex gap-2 items-center tracking-wide hover:border-b-2 border-blue-500"
      [routerLink]="href"
      [target]="isExternal ? '_blank' : '_self'"
      (mouseenter)="isHovered = true"
      (mouseleave)="isHovered = false"
    >
      {{ label }}
      <span *ngIf="isExternal">
        <i
          class="bi bi-box-arrow-up-right text-xs"
          [ngClass]="isHovered ? 'text-inherit' : 'text-gray-400'"
        ></i>
      </span>
    </a>
  `,
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
