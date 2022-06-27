import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [':host { @apply flex-grow flex flex-col gap-8 py-8; }'],
})
export class HomeComponent {}
