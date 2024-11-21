import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
} from '@angular/core';

import JSConfetti from 'js-confetti';

import { FooterComponent } from '../../shell/components';
import { KonamiCodeDirective } from '../../utils/konami-code.directive';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArticlesComponent } from './articles/articles.component';
import { ExperienceComponent } from './experience/experience.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SocialsComponent } from './introduction/socials.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EducationComponent } from './education/education.component';

@Component({
  imports: [
    AboutMeComponent,
    ArticlesComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    IntroductionComponent,
    KonamiCodeDirective,
    SidenavComponent,
    SocialsComponent,
  ],
  template: `
    <div
      (konamiCodeEntered)="onKonamiCodeEntered()"
      class="sticky mx-auto h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:py-0"
    >
      <div class="lg:flex lg:justify-between">
        <header
          class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
        >
          <app-introduction />
          <app-sidenav />
          <app-socials class="ml-1 mt-8" />
        </header>

        <main class="pt-24 lg:w-1/2 lg:py-24">
          <app-about-me />
          <app-experience />
          <app-education />
          <app-articles />

          <app-footer />
        </main>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements AfterViewInit {
  readonly #ngZone = inject(NgZone);

  #jsConfetti: JSConfetti | null = null;

  ngAfterViewInit(): void {
    this.#jsConfetti = new JSConfetti();
  }

  onKonamiCodeEntered(): void {
    this.#ngZone.runOutsideAngular(() =>
      this.#jsConfetti?.addConfetti({
        emojis: ['🦄', '☕'],
      }),
    );
  }
}
