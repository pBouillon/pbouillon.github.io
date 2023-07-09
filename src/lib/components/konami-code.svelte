<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  import JSConfetti from 'js-confetti';

  import { isKonamiCodePressed } from '$lib/stores/konami';
  import type { Unsubscriber } from 'svelte/store';

  let unsubscribe: Unsubscriber = () => {};

  onMount(() => {
    const jsConfetti = new JSConfetti();

    unsubscribe = isKonamiCodePressed.subscribe(
      (isKonamiCodePressed: boolean): void => {
        if (!isKonamiCodePressed) return;

        jsConfetti.addConfetti({
          emojis: ['🦄', '✨'],
          confettiNumber: 30,
        });
      }
    );
  });

  onDestroy(unsubscribe);
</script>
