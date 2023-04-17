import React, { ReactElement } from 'react';
import { Typography } from '@elton-okawa/typography';
import { mergeClassNames } from '@elton-okawa/commons';
import { Button } from '@elton-okawa/button';
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
    <Button
      variant={props.selected ? 'filled' : 'text'}
      extraClasses={[styles.navItem, !open ? styles.collapsed : '']}
    >
      {props.icon}
      <NavHide>
        <Typography>{props.label}</Typography>
      </NavHide>
    </Button>
  );
}
