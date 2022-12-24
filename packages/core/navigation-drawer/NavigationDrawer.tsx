import React, { ReactElement, useState } from 'react';
import styles from './styles.module.css';
import { DrawerProvider } from './DrawerContext';
import { DrawerContainer } from './DrawerContainer';

export interface NavigationDrawerProps {
  children: ReactElement;
}

export function NavigationDrawer(props: NavigationDrawerProps) {
  return (
    <DrawerProvider>
      <DrawerContainer>{props.children}</DrawerContainer>
    </DrawerProvider>
  );
}
