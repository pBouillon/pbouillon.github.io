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
      href: 'about-me',
      label: 'Qui suis-je ?',
      isExternal: false,
    },
    {
      href: 'blog',
      label: 'Blog',
      isExternal: false,
    },
    {
      href: 'my-projects',
      label: 'Mes projets',
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
    const isDarkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isLightThemeSet = localStorage['theme'] === 'light';

    if (isDarkThemePreferred && !isLightThemeSet) {
      this.isDarkModeEnabled = true;
      document.documentElement.classList.add('dark');
    }
  }

  /**
   * Toggle dark mode based on the current theme
   */
  toggleDarkMode(): void {
    const isDarkModeSet = document.documentElement.classList.toggle('dark');

    this.isDarkModeEnabled = isDarkModeSet;

    localStorage['theme'] = isDarkModeSet ? 'dark' : 'light';
  }
}
