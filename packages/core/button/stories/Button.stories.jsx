import React from 'react';

import { Button } from '../index';

export default {
  title: 'Button',
  component: Button,
};

const variants = ['text', 'outlined', 'filled'];
const shapes = ['rounded', 'square'];

const Template = ({ ...args }) => {
  const buttons = [];

  for (const shape of shapes) {
    for (const variant of variants) {
      buttons.push(
        <Button key={`${shape}-${variant}`} variant={variant} shape={shape}>
          {args.label}
        </Button>
      );
    }
    buttons.push(<br />);
  }

  return buttons;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
