import React from 'react';

import { HomeIcon, AccountIcon } from '@elton-okawa/icons';
import { NavigationDrawer, NavItem } from '../index';

export default {
  title: 'NavigationDrawer',
  component: NavigationDrawer,
};

const Template = ({ ...args }) => (
  <NavigationDrawer
    {...args}
    top={<NavItem icon={<HomeIcon />} label="Home" selected />}
    middle={
      <>
        <NavItem icon={<AccountIcon />} label="Account" />
        <NavItem icon={<AccountIcon />} label="Account" />
        <NavItem icon={<AccountIcon />} label="Account" />
      </>
    }
    bottom={<NavItem icon={<HomeIcon />} label="Home" />}
  />
);

export const Default = Template.bind({});
Default.args = {};
