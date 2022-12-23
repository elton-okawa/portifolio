import React from 'react';

import { NavigationDrawer } from '../index';

export default {
  title: 'NavigationDrawer',
  component: NavigationDrawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = ({ ...args }) => (
  <NavigationDrawer {...args}>
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
  </NavigationDrawer>
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
