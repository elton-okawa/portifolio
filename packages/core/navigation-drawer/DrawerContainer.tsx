import React, { ReactElement } from 'react';

import styles from './styles.module.css';
import { useDrawerState } from './DrawerContext';

export interface DrawerContainerProps {
  children: ReactElement;
}

export function DrawerContainer({ children }: DrawerContainerProps) {
  const open = useDrawerState();
  const stateClass = open ? styles.open : styles.closed;

  return <div className={`${styles.navbar} ${stateClass}`}>{children}</div>;
}
