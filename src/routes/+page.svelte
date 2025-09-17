<script>
  import { m } from '$lib/paraglide/messages';
  import BrutArticlesDeck from '../lib/components/articles/BrutArticlesDeck.svelte';
  import BrutAdaptiveButton from '../lib/components/BrutAdaptiveButton.svelte';
  import BrutProjectCardsDeck from '../lib/components/projects/BrutProjectCardsDeck.svelte';
  import BrutTimelineStep from '../lib/components/timeline/BrutTimelineStep.svelte';
</script>

<svelte:head>
  <meta name="description" content={m.page_description()} />
</svelte:head>

<main
  class="flex min-h-dvh flex-col items-center justify-center bg-accent-background px-5 pt-18"
>
  <div class="w-container mx-auto max-w-full">
    <div class="flex flex-col items-center gap-12">
      <h1 class="text-center text-4xl font-bold tracking-tight text-foreground">
        {m.welcome_message()}
      </h1>

      <p class="max-w-2xl text-center text-xl leading-snug text-foreground">
        {m.introduction()}
        <br />
        <small class="inline-block pt-5 text-sm"
          >{m.introduction_subtext()}</small
        >
      </p>

      <div class="flex gap-4">
        <BrutAdaptiveButton
          shape="icon-lg"
          variant="secondary"
          href="https://github.com/pbouillon"
          target="_blank"
          rel="noopener"
          title="GitHub Profile"
        >
          <i class="bi bi-github text-xl"></i>
        </BrutAdaptiveButton>

        <BrutAdaptiveButton
          shape="icon-lg"
          variant="secondary"
          href="https://linkedin.com/in/pierre-bouillon"
          target="_blank"
          rel="noopener"
          title="LinkedIn Profile"
        >
          <i class="bi bi-linkedin text-xl"></i>
        </BrutAdaptiveButton>

        <BrutAdaptiveButton
          shape="icon-lg"
          variant="secondary"
          href="https://dev.to/pbouillon"
          target="_blank"
          rel="noopener"
          title="DEV.to Profile"
        >
          <i class="bi bi-journal-code text-xl"></i>
        </BrutAdaptiveButton>

        <BrutAdaptiveButton
          shape="icon-lg"
          variant="secondary"
          href="/Pierre_Bouillon-FR.pdf"
          target="_blank"
          title="Pierre Bouillon's resume"
        >
          <i class="bi bi-file-earmark-person-fill text-xl"></i>
        </BrutAdaptiveButton>
      </div>
    </div>
  </div>
</main>

<section
  class="flex flex-col items-center justify-center border-t-4 border-border bg-background px-5 py-18"
>
  <hgroup>
    <h2 class="text-center text-2xl font-bold tracking-tight text-foreground">
      {m.experiences_title()}
    </h2>

    <p class="mt-3 max-w-xl text-center leading-snug text-foreground">
      {m.experiences_subtitle()}
    </p>
  </hgroup>

  <div class="mt-12 w-full max-w-2xl">
    <BrutTimelineStep
      event={{
        title: m['timeline_event-eid-title'](),
        subtitle: m['timeline_event-eid-subtitle'](),
        startDate: '2025',
        isWorkRelated: true,
        description: m['timeline_event-eid-description'](),
      }}
    />

    <BrutTimelineStep
      event={{
        title: m['timeline_event-career_break-title'](),
        startDate: '2024',
        endDate: '2025',
        isWorkRelated: false,
        description: m['timeline_event-career_break-description'](),
      }}
    />

    <BrutTimelineStep
      event={{
        title: m['timeline_event-lombard_odier-title'](),
        subtitle: m['timeline_event-lombard_odier-subtitle'](),
        startDate: '2021',
        endDate: '2024',
        isWorkRelated: true,
        description: m['timeline_event-lombard_odier-description'](),
      }}
    />

    <BrutTimelineStep
      event={{
        title: m['timeline_event-docaposte-title'](),
        subtitle: m['timeline_event-docaposte-subtitle'](),
        startDate: '2018',
        endDate: '2021',
        isWorkRelated: true,
        description: m['timeline_event-docaposte-description'](),
      }}
      isLast
    />
  </div>
</section>

<section
  class="flex flex-col items-center justify-center border-t-4 border-border bg-accent-background px-5 py-18 text-accent-foreground"
>
  <hgroup>
    <h2 class="text-center text-2xl font-bold tracking-tight">
      {m.articles_title()}
    </h2>

    <p class="mt-3 max-w-xl text-center leading-snug">
      {m.articles_subtitle()}
    </p>
  </hgroup>

  <BrutArticlesDeck />
</section>

<section
  class="flex flex-col items-center justify-center border-t-4 border-border bg-background px-5 py-18 text-foreground"
>
  <hgroup>
    <h2 class="text-center text-2xl font-bold tracking-tight">
      {m.projects_title()}
    </h2>

    <p class="mt-3 max-w-xl text-center leading-snug">
      {m.projects_subtitle()}
    </p>
  </hgroup>

  <BrutProjectCardsDeck />
</section>
