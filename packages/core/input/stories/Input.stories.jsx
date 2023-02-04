import React from 'react';

import { Input } from '../index';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
