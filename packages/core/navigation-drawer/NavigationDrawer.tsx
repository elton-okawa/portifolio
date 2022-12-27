import React, { ReactNode } from 'react';

import { DrawerProvider } from './DrawerContext';
import { DrawerContainer } from './DrawerContainer';
import { DrawerButton } from './DrawerButton';
import styles from './styles.module.css';

export interface NavigationDrawerProps {
  top?: ReactNode;
  middle?: ReactNode;
  bottom?: ReactNode;
}

export function NavigationDrawer(props: NavigationDrawerProps) {
  return (
    <DrawerProvider>
      <DrawerContainer>
        <DrawerButton />
        <div className={styles.top}>{props.top}</div>
        <div className={styles.middle}>{props.middle}</div>
        <div className={styles.bottom}>{props.bottom}</div>
      </DrawerContainer>
    </DrawerProvider>
  );
}
