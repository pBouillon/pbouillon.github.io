import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
  output,
} from '@angular/core';

@Directive({
  selector: '[inViewport]',
  standalone: true,
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  readonly inViewport = output<void>();
  readonly #observedElementRef = inject(ElementRef<unknown>);

  readonly #observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.inViewport.emit();
        }
      });
    },
    {
      // Use 25% margins to only consider the middle 50% of the viewport
      rootMargin: '-25% 0% -25% 0%',
    },
  );

  ngAfterViewInit(): void {
    this.#observer.observe(this.#observedElementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.#observer.disconnect();
  }
}
