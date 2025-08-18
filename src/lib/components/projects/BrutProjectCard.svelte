<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import type { Project, ProjectType } from './project';

  const { project }: { project: Project } = $props();

  const icons: Record<ProjectType, string> = {
    code: 'bi-code-slash',
    teaching: 'bi-mortarboard',
    writing: 'bi-pen',
  } as const;

  const projectTypeKeys: Record<ProjectType, () => string> = {
    teaching: m.projects_types_teaching,
    writing: m.projects_types_writing,
    code: m.projects_types_code,
  } as const;
</script>

<article
  class="relative flex max-w-xl flex-col border-3 border-l-10 border-border border-l-primary bg-background px-5 py-8 text-foreground shadow-shadow md:max-w-2xl"
>
  <span
    class="absolute -top-4 right-3 border-2 border-border bg-secondary-background px-2 py-1 text-xs text-secondary-foreground uppercase sm:text-sm"
  >
    <i class="bi {icons[project.type]} mr-1"></i>
    {projectTypeKeys[project.type]()}
  </span>

  <hgroup class="grow">
    <h3 class="font-semibold sm:text-lg">{project.name}</h3>

    <p class="mt-2 text-sm leading-snug sm:text-base">
      {project.description}
    </p>
  </hgroup>

  {#if project.reference}
    <hr class="my-6 text-border" />

    <footer class="text-right text-xs sm:text-sm">
      <a href={project.reference.url} class="group hover:border-b-1">
        {m.projects_see_on({ source: project.reference.source })}
        <i
          class="bi bi-arrow-right ml-1 inline-block transition-transform group-hover:translate-x-1"
        ></i>
      </a>
    </footer>
  {/if}
</article>
