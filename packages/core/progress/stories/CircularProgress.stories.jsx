import React from 'react';

import { CircularProgress } from '../index';

export default {
  title: 'CircularProgress',
  component: CircularProgress,
};

const sizes = ['small', 'medium', 'large'];

const Template = ({ ...args }) => {
  const progress = [];

  for (const size of sizes) {
    progress.push(<CircularProgress size={size} />);
    progress.push(<br />);
  }

  return progress;
};

export const Default = Template.bind({});
Default.args = {};
