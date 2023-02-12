import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectSummary } from 'src/app/core/models/project-summary.model';
import { CardComponent } from 'src/app/shared/components';

@Component({
  standalone: true,
  selector: 'app-my-projects',
  imports: [CommonModule, CardComponent],
  templateUrl: './my-projects.component.html',
  styles: [':host { @apply flex-grow flex flex-col gap-8 py-8; }'],
})
export class MyProjectsComponent {
  projects: ProjectSummary[] = [
    {
      name: 'Page personnelle',
      description: `
        Ma page personnelle actuellement affichée sur votre écran
      `,
      link: 'https://pbouillon.github.io',
      technologies: ['Angular 14', 'TailwindCSS'],
    },
    {
      name: 'Locutionis',
      description: `
        Référentiel amateur de figures de style françaises visant à vulgariser
        leurs définitions et usages.
      `,
      link: 'https://locutionis.vercel.app',
      technologies: ['Angular 15', 'NgRx', 'TailwindCSS'],
    },
    {
      name: 'Locutionis API',
      description: `
        Minimal API RESTful servant de backend à Locutionis.
      `,
      link: 'https://github.com/pBouillon/Locutionis.Api',
      technologies: ['.NET 7', 'C# 11'],
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
