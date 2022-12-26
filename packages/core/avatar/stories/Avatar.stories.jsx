import React from 'react';

import { Avatar } from '../index';

export default {
  title: 'Avatar',
  component: Avatar,
};

const sizes = ['small', 'medium', 'large'];

const Template = ({ ...args }) => {
  const avatars = [];

  for (const size of sizes) {
    avatars.push(
      <Avatar size={size}>
        <img src="./profile.png" />
      </Avatar>
    );
    avatars.push(<br />);
  }

  return avatars;
};

export const Default = Template.bind({});
Default.args = {};
