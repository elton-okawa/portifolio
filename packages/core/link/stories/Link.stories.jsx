import React from 'react';

import { Link } from '../index';

export default {
  title: 'Link',
  component: Link,
};

const Template = (args) => {
  return <Link {...args}>Link</Link>;
};

export const Default = Template.bind({});
Default.args = {
  href: 'www.google.com',
};
