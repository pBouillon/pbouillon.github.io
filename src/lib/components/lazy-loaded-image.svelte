<script lang="ts">
  import { onMount } from 'svelte';

  export let alt: string;
  export let src: string;

  let imageElement: HTMLImageElement;

  const imageObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) return;

        const image = entry.target as HTMLImageElement;
        loadImage(image);

        observer.unobserve(image);
      });
    }
  );

  onMount(() => {
    imageObserver.observe(imageElement);
  });

  const loadImage = (imageEl: HTMLImageElement): void => {
    const imageSource = imageEl.getAttribute('data-src')!;

    imageEl.setAttribute('src', imageSource);
    imageEl.removeAttribute('data-src');
  };
</script>

<img src="placeholder.jpg" data-src={src} {alt} bind:this={imageElement} />
