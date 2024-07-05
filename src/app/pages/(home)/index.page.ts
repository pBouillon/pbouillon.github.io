import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  NgZone,
  inject,
} from '@angular/core';

import JSConfetti from 'js-confetti';

import { FooterComponent } from '../../shell/components';
import { ActivateSectionService } from '../../utils/active-section/active-section.service';
import { InViewportDirective } from '../../utils/in-viewport.directive';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArticlesComponent } from './articles/articles.component';
import { ExperienceComponent } from './experience/experience.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SocialsComponent } from './introduction/socials.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { KonamiCodeDirective } from '../../utils/konami-code.directive';

@Component({
  standalone: true,
  imports: [
    AboutMeComponent,
    ArticlesComponent,
    ExperienceComponent,
    IntroductionComponent,
    SidenavComponent,
    SocialsComponent,
    InViewportDirective,
    FooterComponent,
    KonamiCodeDirective,
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
          <app-about-me (inViewport)="setFragment('about')" />

          <app-experience
            #experience
            (inViewport)="setFragment('experience')"
          />

          @defer (on viewport(experience); prefetch on idle) {
            <app-articles (inViewport)="setFragment('articles')" />
          }
          <app-footer />
        </main>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements AfterViewInit {
  readonly #activeSection = inject(ActivateSectionService);
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

  setFragment(fragment: string): void {
    this.#activeSection.setActiveSection(fragment);
  }
}
