<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { Unsubscriber } from 'svelte/store';

  import JSConfetti from 'js-confetti';

  import { isKonamiCodePressed } from '$lib/stores/konami';

  let unsubscribe: Unsubscriber = () => {};

  onMount(() => {
    const jsConfetti = new JSConfetti();

    unsubscribe = isKonamiCodePressed.subscribe(
      (isKonamiCodePressed: boolean): void => {
        if (!isKonamiCodePressed) return;

        jsConfetti.addConfetti({
          emojis: ['🦄', '✨'],
          confettiNumber: 50,
        });
      }
    );
  });

  onDestroy(unsubscribe);
</script>
