import React from 'react';

import { IconButton } from '../index';
import { HomeIcon } from '@elton-okawa/icons';

export default {
  title: 'IconButton',
  component: IconButton,
};

const variants = ['text', 'filled'];

const Template = ({ ...args }) => {
  const buttons = [];

  for (const variant of variants) {
    buttons.push(
      <IconButton variant={variant}>
        <HomeIcon />
      </IconButton>
    );
    buttons.push(<br />);
  }

  return buttons;
};

export const Default = Template.bind({});
Default.args = {};
