import { Icon, mdiAccount, mdiHome, mdiWifiSettings } from '@elton-okawa/icons';
import React from 'react';
import { DrawerButton } from '../DrawerButton';

import { NavigationDrawer, NavItem } from '../index';

export default {
  title: 'NavigationDrawer',
  component: NavigationDrawer,
};

const Template = ({ ...args }) => (
  <NavigationDrawer {...args}>
    <DrawerButton />
    <NavItem icon={<Icon icon={mdiHome} />} label="Home" selected />
    <NavItem icon={<Icon icon={mdiAccount} />} label="Account" />
    <NavItem icon={<Icon icon={mdiWifiSettings} />} label="Wifi" />
  </NavigationDrawer>
);

export const Default = Template.bind({});
Default.args = {};
