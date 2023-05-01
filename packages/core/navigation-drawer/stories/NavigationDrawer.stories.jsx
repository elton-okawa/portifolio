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
    top={<NavItem startIcon={<HomeIcon />} label="Home" selected />}
    middle={
      <>
        <NavItem startIcon={<AccountIcon />} label="Account" />
        <NavItem startIcon={<AccountIcon />} label="Account" />
        <NavItem
          startIcon={<AccountIcon />}
          endIcon={<HomeIcon />}
          label="Account"
        />
      </>
    }
    bottom={<NavItem startIcon={<HomeIcon />} label="Home" />}
  />
);

export const Default = Template.bind({});
Default.args = {};
