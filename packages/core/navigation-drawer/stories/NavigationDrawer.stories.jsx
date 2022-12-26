import React from 'react';

import { HomeIcon, AccountIcon } from '@elton-okawa/icons';
import { NavigationDrawer, NavItem } from '../index';

export default {
  title: 'NavigationDrawer',
  component: NavigationDrawer,
};

const Template = ({ ...args }) => (
  <NavigationDrawer {...args}>
    <NavItem icon={<HomeIcon />} label="Home" selected />
    <NavItem icon={<AccountIcon />} label="Account" />
  </NavigationDrawer>
);

export const Default = Template.bind({});
Default.args = {};
