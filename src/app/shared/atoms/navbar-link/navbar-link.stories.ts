import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { NavbarLinkComponent } from './navbar-link.component';

export default {
  component: NavbarLinkComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavbarLinkComponent],
      imports: [CommonModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `
      <div style="width: fit-content">
        ${story}
      </div>`
    ),
  ],
  title: 'Atoms/Navbar link',
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  href: '#',
  label: 'Label',
  isExternal: false,
};

export const External = Template.bind({});
External.args = {
  ...Default.args,
  isExternal: true,
};
