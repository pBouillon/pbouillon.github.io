import { Component } from '@angular/core';
import { ProjectSummary } from 'src/app/core/models/project-summary.model';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
})
export class MyProjectsComponent {
  projects: ProjectSummary[] = [
    {
      name: 'Page personnelle',
      description: `
        Ma page personnelle, celle-la même affichée actuellement
      `,
      link: 'https://pbouillon.github.io',
      technologies: ['Angular 13', 'TailwindCSS', 'Storybook'],
    },
    {
      name: 'Locutionis',
      description: `
        Référentiel amateur de figures de style françaises visant à vulgariser
        leurs définitions et usages.
      `,
      link: 'https://pbouillon.github.io/locutionis',
      technologies: ['Svelte', 'SvelteKit', 'TailwindCSS'],
    },
    {
      name: 'TODO List',
      description: `
        Projet destiné à parcourir l'écosystème Java Spring au travers d'une API
        REST mettant en œuvre des principes de CQRS et de l'architecture
        hexagonale
      `,
      link: 'https://github.com/pBouillon/todo-list',
      technologies: ['Spring Boot', 'Java 11', 'MapStruct', 'Lombok', 'docker'],
    },
    {
      name: 'MqttTopicBuilder',
      description: `
        NuGet destiné à simplifier la création de topics MQTT en s'assurant de
        leur validité en fournissant une API orientée objets et non primitives
      `,
      link: 'https://nuget.org/packages/MqttTopicBuilder/',
      technologies: ['.NET Standard 2.0', 'C# 8.0'],
    },
    {
      name: 'Moving List',
      description: `
        Listing des objets proposés à la vente ou à la donation d'objets dans le
        cadre d'un déménagement permettant de gérer et de diffuser soi-même les
        offres
      `,
      link: 'https://pbouillon.github.io/moving-list',
      technologies: ['Angular 12', 'Bootstrap'],
    },
    {
      name: 'InTechNet',
      description: `
        Plateforme de classes virtuelles proposant des activités ludiques et
        interactives sur le thème du numérique à destination des jeunes
        adolescents.
      `,
      link: 'https://github.com/pBouillon?tab=repositories&q=intechnet',
      technologies: [
        '.NET Core 3.1',
        'C# 8.0',
        'Angular 9',
        'Bootstrap',
        'Python',
      ],
    },
  ];
}
