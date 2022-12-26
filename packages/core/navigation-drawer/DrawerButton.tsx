import React from 'react';

import { IconButton } from '@elton-okawa/icon-button';
import { ChevronRightIcon, ChevronLeftIcon } from '@elton-okawa/icons';
import { useDrawerApi, useDrawerState } from './DrawerContext';
import styles from './styles.module.css';

export function DrawerButton() {
  const setOpen = useDrawerApi();
  const open = useDrawerState();

  const stateClass = open ? styles.drawerOpen : styles.drawerClosed;
  const Icon = open ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <div className={`${styles.drawerButton} ${stateClass}`}>
      <IconButton onClick={() => setOpen((open) => !open)}>
        <Icon />
      </IconButton>
    </div>
  );
}
