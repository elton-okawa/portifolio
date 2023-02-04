import React, { useState } from 'react';

import { Input } from '../index';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => {
  const [value, setValue] = useState('');

  return <Input value={value} onChange={setValue} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
