import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DarkModeTogglerIconComponent } from './dark-mode-toggler-icon.component';

export default {
  component: DarkModeTogglerIconComponent,
  decorators: [
    moduleMetadata({
      declarations: [DarkModeTogglerIconComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Atoms/Dark mode toggler icon',
} as Meta;

const actionsData = {
  onToggleDarkMode: action('onToggleDarkMode'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    onToggleDarkMode: actionsData.onToggleDarkMode,
  },
});

export const Default = Template.bind({});
Default.args = {
  isDarkModeEnabled: false,
};

export const DarkModeEnabled = Template.bind({});
DarkModeEnabled.args = {
  ...Default.args,
  isDarkModeEnabled: true,
};
