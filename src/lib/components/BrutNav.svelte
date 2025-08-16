<script lang="ts">
  import { localizeHref } from '../paraglide/runtime';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<nav
  class="fixed top-0 z-50 flex h-20 w-full items-center border-b-4 border-border bg-secondary-background text-secondary-foreground md:px-4"
>
  <ul class="flex grow gap-4 px-3 py-4">
    <li class="flex grow items-center">
      <a
        href={localizeHref('/')}
        class="text-2xl font-semibold tracking-tighter md:text-3xl"
        >Pierre Bouillon</a
      >
    </li>

    <ThemeSwitcher />

    <LanguageSwitcher />
  </ul>
</nav>
