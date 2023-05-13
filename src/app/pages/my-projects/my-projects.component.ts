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
        Ma page personnelle actuellement affichée sur votre écran.
      `,
      link: 'https://pbouillon.github.io',
      technologies: ['Angular 16', 'TailwindCSS'],
    },
    {
      name: 'ngx-flagr',
      description: `
        Librairie NPM pour Angular visant à simplifier l'usage et l'utilisation
        des feature flags.
      `,
      link: 'https://pbouillon.github.io/ngx-flagr',
      technologies: ['Angular 16', 'Docusaurus'],
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
        RESTful Minimal API servant de backend à Locutionis.
      `,
      link: 'https://github.com/pBouillon/Locutionis.Api',
      technologies: ['.NET 7', 'C# 11'],
    },
    {
      name: 'MqttTopicBuilder',
      description: `
        NuGet destiné à simplifier la création de topics MQTT en s'assurant de
        leur validité en fournissant une API orientée objets et non primitives.
      `,
      link: 'https://nuget.org/packages/MqttTopicBuilder/',
      technologies: ['.NET Standard 2.0', 'C# 8.0'],
    },
  ];
}
