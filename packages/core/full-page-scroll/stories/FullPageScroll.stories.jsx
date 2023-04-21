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
      <Section>Hello</Section>
      <Section>World</Section>
      <Section>Test</Section>
    </FullPageScroll>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
