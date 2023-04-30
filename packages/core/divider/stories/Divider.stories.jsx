import React from 'react';

import { Divider } from '../index';

export default {
  title: 'Divider',
  component: Divider,
};

const colors = ['black', 'primary', 'secondary'];
const sizes = ['fullWidth', 'medium', 'small'];

const Template = ({ ...args }) => {
  const dividers = [];

  for (const color of colors) {
    dividers.push(<Divider key={`${color}`} color={color} />);
    dividers.push(<br />);
  }

  for (const size of sizes) {
    dividers.push(<Divider key={`${size}`} size={size} />);
    dividers.push(<br />);
  }

  return dividers;
};

export const Default = Template.bind({});
Default.args = {};
