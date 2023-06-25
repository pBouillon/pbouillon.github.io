<script lang="ts">
  import ThemeTogglerButton from './theme-toggler-button.svelte';
  import ThemeTogglerSelect from './theme-toggler-select.svelte';

  type NavbarLinks = {
    title: string;
    href: string;
    isExternal?: boolean;
  };

  const navbarLinks: NavbarLinks[] = [
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
        <a href="/" class="btn-ghost btn text-2xl normal-case lg:text-3xl"
          >Pierre Bouillon</a
        >
      </div>

      <!-- Sidebar Toggle -->
      <div class="flex-none lg:hidden">
        <label for="navbar-drawer" class="btn-ghost btn-square btn">
          <i class="bi bi-list text-2xl" />
        </label>
      </div>

      <!-- Navigation Items -->
      <nav class="hidden flex-none lg:block">
        <!-- Navbar menu content here -->
        <ul class="menu menu-horizontal menu-lg">
          {#each navbarLinks as { href, title, isExternal }}
            <li>
              <a {href} target={isExternal ? '_blank' : 'self'}
                >{title}
                {#if isExternal}
                  <i class="bi bi-box-arrow-up-right" />
                {/if}</a
              >
            </li>
          {/each}
          <li><ThemeTogglerButton /></li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- Sidebar Content -->
  <nav class="drawer-side z-50">
    <label for="navbar-drawer" class="drawer-overlay" />
    <ul class="menu menu-lg h-full w-80 bg-base-100 p-4">
      {#each navbarLinks as { href, title, isExternal }}
        <li>
          <a {href} target={isExternal ? '_blank' : 'self'}
            >{title}
            {#if isExternal}
              <i class="bi bi-box-arrow-up-right" />
            {/if}</a
          >
        </li>
      {/each}
      <li><ThemeTogglerSelect /></li>
    </ul>
  </nav>
</div>
