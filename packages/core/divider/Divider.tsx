import React from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';

import styles from './Divider.module.css';

export type DividerColor = 'black' | 'primary' | 'secondary';
export type DividerSize = 'fullWidth' | 'medium' | 'small';

export interface DividerProps extends ExtraProps {
  color?: DividerColor;
  size?: DividerSize;
}

export function Divider({
  color = 'black',
  size = 'fullWidth',
  extraClasses = [],
}: DividerProps) {
  return (
    <hr
      className={mergeClassNames(
        styles.divider,
        styles[color],
        styles[size],
        ...extraClasses
      )}
    />
  );
}
