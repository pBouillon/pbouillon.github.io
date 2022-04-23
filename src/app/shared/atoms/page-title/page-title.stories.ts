import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PageTitleComponent } from './page-title.component';

export default {
  component: PageTitleComponent,
  decorators: [
    moduleMetadata({
      declarations: [PageTitleComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Atoms/Page title',
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  title: 'Main Title',
  subtitle: 'Subtitle',
};
