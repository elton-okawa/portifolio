import React from 'react';

import { Typography } from '../index';

export default {
  title: 'Typography',
  component: Typography,
};

const Template = ({ children, ...args }) => {
  return [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ].map((variant) => (
    <>
      <p>{variant}</p>
      <Typography key={variant} variant={variant}>
        {children}
      </Typography>
    </>
  ));
};

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut mi accumsan, accumsan enim nec, lacinia odio. Curabitur imperdiet augue vitae iaculis vehicula',
};
