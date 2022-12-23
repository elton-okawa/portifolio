import React, { ReactElement } from 'react';
import styles from './styles.module.css';

export interface NavigationDrawerProps {
  isOpen: boolean;
  children: ReactElement[];
}

export function NavigationDrawer(props: NavigationDrawerProps) {
  const stateClass = props.isOpen ? styles.open : styles.closed;

  return (
    <div className={`${styles.navbar} ${stateClass}`}>{props.children}</div>
  );
}
