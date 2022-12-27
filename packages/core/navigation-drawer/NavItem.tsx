import React, { ReactElement } from 'react';
import { Typography } from '@elton-okawa/typography';
import styles from './styles.module.css';
import { useDrawerState } from './DrawerContext';
import { NavHide } from './NavHide';

export interface NavItemProps {
  icon: ReactElement;
  label: string;
  selected: boolean;
}

export function NavItem(props: NavItemProps) {
  const open = useDrawerState();

  return (
    <div
      className={`${styles.navItem} ${props.selected ? styles.selected : ''} ${
        !open ? styles.collapsed : ''
      }`}
    >
      {props.icon}
      <NavHide>
        <Typography>{props.label}</Typography>
      </NavHide>
    </div>
  );
}
