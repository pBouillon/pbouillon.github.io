import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BootstrapIconDirective } from '../../../utils/icons';
import { PillComponent } from '../../../utils/pill/pill.component';
import { ExperienceCardComponent } from './experience-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    RouterLink,
    ExperienceCardComponent,
    PillComponent,
    BootstrapIconDirective,
  ],
  template: `
    <section
      id="experience"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:text-lg"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 class="text-sm font-semibold uppercase tracking-widest">
          Experience
        </h2>
      </div>

      <div class="group/experiences space-y-12">
        <app-experience-card redirectTo="https://www.lombardodier.com/">
          <ng-container duration>2021 — Present</ng-container>
          <ng-container company>Lombard Odier</ng-container>
          <ng-container role>Fullstack Software Engineer</ng-container>

          <p class="mb-2">
            Design, develop and maintain an audit management platform
            re-certifying internal company components and synchronizing
            information with third-party IT systems. Work closely with the
            involved business teams to implement their specific needs while
            growing the product.
          </p>

          <ng-container frontend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>Angular</app-pill></li>
              <li><app-pill>NgRx</app-pill></li>
              <li><app-pill>TailwindCSS</app-pill></li>
              <li><app-pill>TypeScript</app-pill></li>
            </ul>
          </ng-container>

          <ng-container backend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>.NET</app-pill></li>
              <li><app-pill>EF Core</app-pill></li>
              <li><app-pill>MediatR</app-pill></li>
              <li><app-pill>RoudhousE</app-pill></li>

              <li><app-pill>AutoFixture</app-pill></li>
              <li><app-pill>FluentAssertion</app-pill></li>

              <li><app-pill>SQL Server</app-pill></li>
            </ul>
          </ng-container>
        </app-experience-card>

        <app-experience-card redirectTo="https://www.docaposte.com/">
          <ng-container duration>2018 — 2021</ng-container>
          <ng-container company>Docaposte</ng-container>
          <ng-container role>Fullstack Software Engineer</ng-container>

          <p class="mb-2">
            Developed a comprehensive web application for a French region,
            enabling users to manage public service access cards, report card
            losses, and more. The goal was to create a digital experience for
            the customers and the operator instead of the paper procedures.
          </p>

          <ng-container frontend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>Angular</app-pill></li>
              <li><app-pill>Bootstrap</app-pill></li>
              <li><app-pill>TypeScript</app-pill></li>
            </ul>
          </ng-container>

          <ng-container backend-technologies>
            <ul class="col-span-11 flex flex-wrap gap-2">
              <li><app-pill>.NET</app-pill></li>
              <li><app-pill>EF Core</app-pill></li>

              <li><app-pill>Moq</app-pill></li>
              <li><app-pill>FluentAssertions</app-pill></li>

              <li><app-pill>Postgres SQL</app-pill></li>
            </ul>
          </ng-container>
        </app-experience-card>
      </div>

      <a
        routerLink="public/cv.pdf"
        target="_blank"
        class="external-link group/cv mt-12 transition-all"
      >
        <span class="capitalize">View full résumé</span>
        <i
          class="ml-2 inline-block group-hover/cv:-translate-y-px group-hover/cv:translate-x-px"
          bootstrapIcon="box-arrow-in-up-right"
        ></i
      ></a>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {}
