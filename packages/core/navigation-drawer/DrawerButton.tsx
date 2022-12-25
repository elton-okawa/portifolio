import React from 'react';
import { useDrawerApi, useDrawerState } from './DrawerContext';
import styles from './styles.module.css';

export function DrawerButton() {
  const setOpen = useDrawerApi();
  const open = useDrawerState();

  const stateClass = open ? styles.drawerOpen : styles.drawerClosed;

  return (
    <button
      className={`${styles.drawerButton} ${stateClass}`}
      onClick={() => setOpen((open) => !open)}
    >
      Toggle
    </button>
  );
}
