import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActivateSectionService {
  readonly #sectionsVisibility = signal<Record<string, number>>({});

  readonly currentSection = computed(() => {
    const sectionsVisibility = this.#sectionsVisibility();

    return (
      Object.entries(sectionsVisibility)
        .sort((a, b) => b[1] - a[1])
        .map(([section]) => section)
        .at(0) || null
    );
  });

  updateSectionVisibility(section: string, percentageInViewport: number) {
    this.#sectionsVisibility.update((sectionsVisibility) => ({
      ...sectionsVisibility,
      [section]: percentageInViewport,
    }));
  }
}
