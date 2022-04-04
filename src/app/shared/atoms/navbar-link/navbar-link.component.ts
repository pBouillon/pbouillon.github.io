import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  template: `
    <a
      class="flex gap-2 items-center tracking-wide hover:underline decoration-2 decoration-blue-500"
      [routerLink]="href"
      [target]="isExternal ? '_blank' : '_self'"
    >
      {{ label }}
      <span *ngIf="isExternal">
        <i class="bi bi-box-arrow-up-right text-xs text-gray-400"></i>
      </span>
    </a>
  `,
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
}
