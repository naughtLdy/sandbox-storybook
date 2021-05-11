import React from 'react';
import { Story, Meta } from '@storybook/react';

import NavVar, { NavBarProps } from '..';

export default {
  title: 'NavVar',
  component: NavVar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavVar {...args} />;

export const Default = Template.bind({});
Default.args = {
  companyName: 'Company Name',
};
