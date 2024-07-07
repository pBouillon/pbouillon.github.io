import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [],
  template: `
    <ul class="flex items-center gap-4 text-2xl lg:gap-6 lg:text-3xl">
      <li>
        <a
          href="https://github.com/pBouillon"
          target="_blank"
          class="transition hover:text-teal-500"
          title="GitHub"
          aria-label="GitHub (opens in a new tab)"
          ><i class="bi bi-github"></i
        ></a>
        <span class="sr-only">GitHub</span>
      </li>

      <li>
        <a
          href="https://linkedin.com/in/pierre-bouillon"
          target="_blank"
          class="transition hover:text-teal-500"
          title="LinkedIn"
          aria-label="LinkedIn (opens in a new tab)"
          ><i class="bi bi-linkedin"></i
        ></a>
        <span class="sr-only">LinkedIn</span>
      </li>

      <li>
        <a
          href="cv.pdf"
          target="_blank"
          class="transition hover:text-teal-500"
          title="CV"
          aria-label="CV (opens in a new tab)"
          ><i class="bi bi-file-earmark-person-fill"></i
        ></a>
        <span class="sr-only">CV</span>
      </li>

      <li>
        <a
          href="https://dev.to/pBouillon"
          target="_blank"
          class="transition hover:text-teal-500"
          title="DEV Community"
          aria-label="DEV Community (opens in a new tab)"
          ><i class="bi bi-feather"></i
        ></a>
        <span class="sr-only">DEV Community</span>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {}
