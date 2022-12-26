import React from 'react';

import { Button } from '../index';

export default {
  title: 'Button',
  component: Button,
};

const variants = ['text', 'outlined', 'filled'];

const Template = ({ ...args }) => {
  const buttons = [];

  for (const variant of variants) {
    buttons.push(<Button variant={variant}>{args.label}</Button>);
    buttons.push(<br />);
  }

  return buttons;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
