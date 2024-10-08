import { ElementRef, Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActivateSectionService {
  readonly #sectionsVisibility = signal<Record<string, number>>({});

  readonly #observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) =>
          this.#updateSectionVisibility(
            entry.target.id,
            entry.intersectionRatio,
          ),
        );
    },
    {
      threshold: Array.from({ length: 10 }, (_, i) => i / 10),
    },
  );

  readonly currentSection = computed(() => {
    const sectionsVisibility = this.#sectionsVisibility();

    return (
      Object.entries(sectionsVisibility)
        .sort((a, b) => b[1] - a[1])
        .map(([section]) => section)
        .at(0) || null
    );
  });

  trackSection(sectionEl: ElementRef) {
    this.#observer.observe(sectionEl.nativeElement);
  }

  #updateSectionVisibility(section: string, percentageInViewport: number) {
    this.#sectionsVisibility.update((sectionsVisibility) => ({
      ...sectionsVisibility,
      [section]: percentageInViewport,
    }));
  }
}
