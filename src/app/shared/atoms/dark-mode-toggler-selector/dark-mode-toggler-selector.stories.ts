import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DarkModeTogglerSelectorComponent } from './dark-mode-toggler-selector.component';

export default {
  component: DarkModeTogglerSelectorComponent,
  decorators: [
    moduleMetadata({
      declarations: [DarkModeTogglerSelectorComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Atoms/Dark mode toggler selector',
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
