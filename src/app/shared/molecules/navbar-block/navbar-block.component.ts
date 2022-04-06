import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NavbarLink } from 'src/app/core/models/navbar-link.model';

@Component({
  selector: 'app-navbar-block',
  templateUrl: './navbar-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBlockComponent {
  /**
   * The links displayed in the navbar
   */
  @Input()
  links: NavbarLink[] = [];

  /**
   * Emitted when the user requests to close the navbar
   */
  @Output()
  onCloseRequested = new EventEmitter<void>();
}
