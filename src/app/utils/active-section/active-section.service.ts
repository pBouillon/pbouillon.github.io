import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActivateSectionService {
  readonly #currentSection = signal<string | null>(null);
  readonly currentSection = this.#currentSection.asReadonly();

  setActiveSection(sectionName: string) {
    this.#currentSection.set(sectionName);
  }
}
