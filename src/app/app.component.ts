import { Component } from '@angular/core';
import { NavbarLink } from './core/models/navbar-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Pierre Bouillon';

  links: NavbarLink[] = [
    {
      href: '',
      label: 'Accueil',
      isExternal: false,
    },
    {
      href: 'https://linkedin.com/in/pierre-bouillon',
      label: 'LinkedIn',
      isExternal: true,
    },
    {
      href: 'https://github.com/pbouillon',
      label: 'GitHub',
      isExternal: true,
    },
  ];

  showMobileNavbar = false;
}
