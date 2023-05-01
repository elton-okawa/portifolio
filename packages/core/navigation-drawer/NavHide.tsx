import React, { ReactNode } from 'react';

import { Flex } from '@elton-okawa/flex';
import { useDrawerState } from './DrawerContext';
import styles from './styles.module.css';

interface NavHideProps {
  children: ReactNode;
}

export function NavHide({ children }: NavHideProps) {
  const open = useDrawerState();
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      extraClasses={[styles.navHide, open ? styles.fadeIn : '']}
    >
      {open ? children : null}
    </Flex>
  );
}
