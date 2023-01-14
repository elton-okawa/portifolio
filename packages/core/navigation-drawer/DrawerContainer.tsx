import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';
import { useDrawerState } from './DrawerContext';

export interface DrawerContainerProps {
  children: ReactNode;
}

export function DrawerContainer({ children }: DrawerContainerProps) {
  const open = useDrawerState();
  const stateClass = open ? styles.open : styles.closed;

  return (
    <div className={mergeClassNames(styles.navbar, stateClass)}>{children}</div>
  );
}
