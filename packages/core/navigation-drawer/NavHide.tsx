import React, { ReactNode } from 'react';
import { useDrawerState } from './DrawerContext';
import styles from './styles.module.css';

interface NavHideProps {
  children: ReactNode;
}

export function NavHide({ children }: NavHideProps) {
  const open = useDrawerState();
  return (
    <div className={open ? styles.fadeIn : ''}>{open ? children : null}</div>
  );
}
