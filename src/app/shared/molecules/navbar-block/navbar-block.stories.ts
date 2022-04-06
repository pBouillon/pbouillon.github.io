import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavbarLinkComponent } from '../../atoms/navbar-link/navbar-link.component';
import { NavbarBlockComponent } from './navbar-block.component';

export default {
  component: NavbarBlockComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavbarBlockComponent, NavbarLinkComponent],
      imports: [CommonModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
  title: 'Molecules/Navbar block',
} as Meta;

const actionsData = {
  onCloseRequested: action('onCloseRequested'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    onCloseRequested: actionsData.onCloseRequested,
  },
});

export const Default = Template.bind({});
Default.args = {
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
