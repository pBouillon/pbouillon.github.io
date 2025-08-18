<script>
  import { m } from '../paraglide/messages';
</script>

<footer
  class="border-t-3 border-border bg-secondary-background px-5 py-12 text-secondary-foreground"
>
  <div class="mx-auto max-w-4xl">
    <div class="flex flex-col gap-6">
      <div
        class="grid grid-cols-2 gap-6 sm:flex sm:items-start sm:justify-between"
      >
        <div class="flex flex-col gap-3">
          <h2 class="text-lg font-semibold">Pierre Bouillon</h2>
          <p class="text-sm">{m.footer_subtext()}</p>
        </div>

        <nav aria-label="Social profiles and external links">
          <ul class="flex flex-col gap-2 text-sm">
            <li>
              <a
                class="underline hover:no-underline"
                href="https://github.com/pbouillon"
                target="_blank"
                rel="noopener"
                title="GitHub Profile">{m.footer_links_github()}</a
              >
            </li>

            <li>
              <a
                class="underline hover:no-underline"
                href="https://linkedin.com/in/pierre-bouillon"
                target="_blank"
                rel="noopener"
                title="LinkedIn Profile">{m.footer_links_linkedin()}</a
              >
            </li>

            <li>
              <a
                class="underline hover:no-underline"
                href="https://dev.to/pbouillon"
                target="_blank"
                rel="noopener"
                title="DEV.to Profile">{m.footer_links_dev()}</a
              >
            </li>

            <li>
              <a
                class="underline hover:no-underline"
                href="/Pierre_Bouillon-FR.pdf"
                target="_blank"
                title="Pierre Bouillon's resume">{m.footer_links_resume()}</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="mt-2 space-y-2 border-t border-border/50 pt-6 text-center text-xs"
      >
        <p>© {new Date().getFullYear()} Pierre Bouillon</p>
        <p>
          <a
            href="https://www.goatcounter.com/privacy"
            class="underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {m.footer_privacy()}
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>
