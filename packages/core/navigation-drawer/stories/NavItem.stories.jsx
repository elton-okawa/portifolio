import React from 'react';

import { NavItem } from '../index';

export default {
  title: 'NavItem',
  component: NavItem,
  argTypes: {},
};

const Template = (args) => <NavItem {...args} />;

export const SelectedCollapsed = Template.bind({});
SelectedCollapsed.args = {
  icon: <span>I</span>,
  label: 'Super Item',
  selected: true,
  collapsed: true,
};

export const SelectedNotCollapsed = Template.bind({});
SelectedNotCollapsed.args = {
  icon: <span>I</span>,
  label: 'Super Item',
  selected: true,
  collapsed: false,
};

export const NotSelectedCollapsed = Template.bind({});
NotSelectedCollapsed.args = {
  icon: <span>I</span>,
  label: 'Super Item',
  selected: false,
  collapsed: true,
};

export const NotSelectedNotCollapsed = Template.bind({});
NotSelectedNotCollapsed.args = {
  icon: <span>I</span>,
  label: 'Super Item',
  selected: false,
  collapsed: false,
};
