import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProjectCardComponent } from './project-card.component';

export default {
  component: ProjectCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProjectCardComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Molecules/Project card',
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  summary: {
    name: 'My awesome project',
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi aut
    praesentium atque earum doloremque natus recusandae voluptatibus.
    `,
    link: '#',
    technologies: ['.NET', 'Angular'],
  },
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  ...Default.args,
  summary: {
    ...Default.args['summary'],
    link: undefined,
  },
};
