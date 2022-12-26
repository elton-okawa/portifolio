import React from 'react';

import { Icon, HomeIcon, AccountIcon } from '../index';

export default {
  title: 'Icon',
  component: Icon,
};

const Template = ({ children, ...args }) => {
  const icons = [HomeIcon, AccountIcon];
  const colors = ['primary', 'secondary', 'text', 'disabled'];
  const sizes = ['small', 'medium', 'large'];

  const elements = [];
  for (const Icon of icons) {
    for (const size of sizes) {
      for (const color of colors) {
        elements.push(<Icon size={size} color={color} />);
      }
    }
    elements.push(<br />);
  }

  return elements;
};

export const Default = Template.bind({});
Default.args = {};
