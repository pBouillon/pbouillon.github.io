import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [
    ':host { @apply flex-grow flex flex-col gap-8 py-8; }',
    'p { @apply md:text-justify md:text-lg }',
  ],
})
export class AboutMeComponent {}
