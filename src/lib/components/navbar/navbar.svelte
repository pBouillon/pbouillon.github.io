<script lang="ts">
  import LanguageSelector from '$lib/components/language-selector.svelte';
  import ThemeTogglerButton from '$lib/components/theming/theme-toggler-button.svelte';
  import ThemeTogglerSelect from '$lib/components/theming/theme-toggler-select.svelte';
  import NavbarLink from './navbar-link.svelte';

  type NavbarLink = {
    title: string;
    href: string;
    isExternal?: boolean;
  };

  const navbarLinks: NavbarLink[] = [
    {
      title: 'about_me.title',
      href: '/about-me',
    },
    {
      title: 'blog.title',
      href: '/blog',
    },
    {
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/pierre-bouillon',
      isExternal: true,
    },
    {
      title: 'GitHub',
      href: 'https://github.com/pbouillon',
      isExternal: true,
    },
  ];
</script>

<div class="drawer drawer-end absolute">
  <input id="navbar-drawer" type="checkbox" class="drawer-toggle" />

  <!-- Navbar -->
  <div class="drawer-content flex flex-col">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-2xl normal-case lg:text-3xl"
          >Pierre Bouillon</a
        >
      </div>

      <!-- Sidebar Toggle -->
      <div class="flex-none lg:hidden">
        <label for="navbar-drawer" class="btn btn-square btn-ghost">
          <i class="bi bi-list text-2xl" />
        </label>
      </div>

      <!-- Navigation Items -->
      <nav class="hidden flex-none lg:block">
        <!-- Navbar menu content here -->
        <ul class="menu menu-horizontal menu-lg gap-3">
          {#each navbarLinks as navbarLink}
            <li><NavbarLink {...navbarLink} /></li>
          {/each}
          <li><LanguageSelector /></li>
          <li><ThemeTogglerButton /></li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- Sidebar Content -->
  <nav class="drawer-side z-50">
    <label for="navbar-drawer" class="drawer-overlay" />
    <ul class="menu menu-lg h-full w-80 bg-base-100 p-4">
      {#each navbarLinks as navbarLink}
        <li><NavbarLink {...navbarLink} /></li>
      {/each}
      <li><span class="divider pointer-events-none" /></li>
      <li><LanguageSelector /></li>
      <li><ThemeTogglerSelect /></li>
    </ul>
  </nav>
</div>
