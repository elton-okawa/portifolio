import React from 'react';

import { FullPageScroll, Section } from '../index';
import styles from './story.module.css';

export default {
  title: 'FullPageScroll',
  component: FullPageScroll,
};

const Template = ({ ...args }) => {
  return (
    <FullPageScroll extraClasses={[styles.color]}>
      <p>Hello</p>
      <p>World</p>
      <p>Test</p>
    </FullPageScroll>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
