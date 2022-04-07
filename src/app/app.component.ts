import { Component, OnInit } from '@angular/core';
import { NavbarLink } from './core/models/navbar-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
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

  isDarkModeEnabled = false;
  showMobileNavbar = false;

  ngOnInit(): void {
    const isDarkThemePreferred = localStorage['theme'] === 'dark'
      || window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkThemePreferred) {
      this.isDarkModeEnabled = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleDarkMode(): void {
    const isDarkModeSet = document.documentElement.classList.toggle('dark');

    this.isDarkModeEnabled = isDarkModeSet;

    if (isDarkModeSet) {
      localStorage['theme'] = 'dark';
    }
  }
}
