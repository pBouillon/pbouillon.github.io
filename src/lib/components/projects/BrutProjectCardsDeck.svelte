<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import BrutProjectCard from './BrutProjectCard.svelte';
  import type { Project } from './project';

  const projects: Project[] = [
    {
      name: m.project_ng_book_name(),
      description: m.project_ng_book_description(),
      type: 'writing',
      reference: {
        source: 'Amazon',
        url: 'https://www.amazon.fr/Modern-Web-Development-Angular-Cutting-Edge/dp/B0DP8LQ597',
      },
    },
    {
      name: m.project_agile_teaching_name(),
      description: m.project_agile_teaching_description(),
      type: 'teaching',
    },
    {
      name: m.projects_mqtttopicbuilder_name(),
      description: m.projects_mqtttopicbuilder_description(),
      type: 'code',
      reference: {
        source: 'GitHub',
        url: 'https://github.com/pBouillon/MqttTopicBuilder',
      },
    },
    {
      name: m.projects_locutionis_name(),
      description: m.projects_locutionis_description(),
      type: 'code',
      reference: {
        source: 'internet',
        url: 'https://pbouillon.github.io/locutionis?utm_source=pbouillon.github.io',
      },
    },
  ];
</script>

<div class="mt-12 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
  {#each projects as project}
    <BrutProjectCard {project} />
  {/each}
</div>
