import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css';
import { DrawerProvider } from './DrawerContext';
import { DrawerContainer } from './DrawerContainer';

export interface NavigationDrawerProps {
  children: ReactNode;
}

export function NavigationDrawer(props: NavigationDrawerProps) {
  return (
    <DrawerProvider>
      <DrawerContainer>{props.children}</DrawerContainer>
    </DrawerProvider>
  );
}
