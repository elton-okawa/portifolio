import React, { ReactNode } from 'react';

import { DrawerProvider } from './DrawerContext';
import { DrawerContainer } from './DrawerContainer';
import { DrawerButton } from './DrawerButton';

export interface NavigationDrawerProps {
  children: ReactNode;
}

export function NavigationDrawer(props: NavigationDrawerProps) {
  return (
    <DrawerProvider>
      <DrawerContainer>
        <DrawerButton />
        {props.children}
      </DrawerContainer>
    </DrawerProvider>
  );
}
