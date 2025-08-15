<script lang="ts">
  import { m } from '../paraglide/messages';
  import { getLocale, setLocale, type Locale } from '../paraglide/runtime';
  import BrutAdaptiveButton from './BrutAdaptiveButton.svelte';

  let nextLocale = $derived<Locale>(getLocale() === 'en' ? 'fr' : 'en');
</script>

<BrutAdaptiveButton
  variant="secondary"
  onclick={() => setLocale(nextLocale)}
  aria-details={m.switch_language_long()}
>
  <i class="bi bi-translate"></i>
</BrutAdaptiveButton>
