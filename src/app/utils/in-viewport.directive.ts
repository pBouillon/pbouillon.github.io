import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
  output,
} from '@angular/core';

@Directive({
  selector: '[percentageInViewport]',
  standalone: true,
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  readonly percentageInViewport = output<number>();
  readonly #observedElementRef = inject(ElementRef<unknown>);

  readonly #observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.percentageInViewport.emit(entry.intersectionRatio);
        }
      });
    },
    {
      threshold: Array.from({ length: 10 }, (_, i) => i / 10),
    },
  );

  ngAfterViewInit(): void {
    this.#observer.observe(this.#observedElementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.#observer.disconnect();
  }
}
