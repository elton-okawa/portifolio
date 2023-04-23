import React from 'react';

import { FullPageScroll } from '../index';
import styles from './story.module.css';

export default {
  title: 'FullPageScroll',
  component: FullPageScroll,
};

const Template = ({ ...args }) => {
  return (
    <FullPageScroll
      extraClasses={[styles.color]}
      sections={[
        {
          id: 'hello',
          title: 'Hello',
          content: <p>Hello</p>,
        },
        {
          id: 'world',
          title: 'World',
          content: <p>World</p>,
        },
        {
          id: 'again',
          title: 'Again',
          content: <p>Again</p>,
        },
      ]}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
