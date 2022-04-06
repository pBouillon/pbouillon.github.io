import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavbarLinkComponent } from '../../atoms/navbar-link/navbar-link.component';
import { NavbarComponent } from './navbar.component';

export default {
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent, NavbarLinkComponent],
      imports: [CommonModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
  title: 'Molecules/Navbar',
} as Meta;

const actionsData = {
  onBurgerMenuClicked: action('onBurgerMenuClicked'),
  onToggleDarkMode: action('onToggleDarkMode'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    onBurgerMenuClicked: actionsData.onBurgerMenuClicked,
    onToggleDarkMode: actionsData.onToggleDarkMode,
  },
});

export const Default = Template.bind({});
Default.args = {
  title: 'Navbar',
  links: [
    {
      href: '#',
      label: 'Internal link',
      isExternal: false,
    },
    {
      href: '#',
      label: 'External link',
      isExternal: true,
    },
  ],
};
