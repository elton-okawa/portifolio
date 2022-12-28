import React from 'react';

import { Emoji } from '../index';

export default {
  title: 'Emoji',
  component: Emoji,
};

const Template = ({ ...args }) => {
  return <Emoji {...args}>🐑</Emoji>;
};

export const Default = Template.bind({});
Default.args = {
  label: 'sheep',
};
