import React from 'react';

import { Flex } from '@elton-okawa/flex';
import styles from './TechStackItem.module.css';
import { Typography } from '@elton-okawa/typography';

export interface TechStackItemProps {
  title: string;
  experienceYears: number;
}

export function TechStackItem({ title, experienceYears }: TechStackItemProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      extraClasses={[styles.container]}
    >
      <Typography>{title}</Typography>
      <Typography>{`${experienceYears}+ years`}</Typography>
    </Flex>
  );
}
