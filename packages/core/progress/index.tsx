import React from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export type CircularProgressSize = 'small' | 'medium' | 'large';

export interface CircularProgressProps {
  size?: CircularProgressSize;
}

export function CircularProgress({ size = 'medium' }: CircularProgressProps) {
  return (
    <svg className={mergeClassNames(styles[size], styles.container)}>
      <circle className={styles.track} />
      <circle className={styles.indicator} />
    </svg>
  );
}

export default CircularProgress;
