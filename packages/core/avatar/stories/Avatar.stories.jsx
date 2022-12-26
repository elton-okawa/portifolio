import React from 'react';

import { Avatar } from '../index';

export default {
  title: 'Avatar',
  component: Avatar,
};

const sizes = ['small', 'medium', 'large', 'container'];

const Template = ({ ...args }) => {
  const avatars = [];

  for (const size of sizes) {
    avatars.push(
      <div style={{ width: args.width, height: args.height }}>
        <Avatar size={size}>
          <img src="./profile.png" />
        </Avatar>
      </div>
    );
    avatars.push(<br />);
  }

  return avatars;
};

export const Default = Template.bind({});
Default.args = {
  width: 60,
  height: 60,
};
