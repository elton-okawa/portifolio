import React, { ReactElement } from 'react';
import { Typography } from '@elton-okawa/typography';
import { mergeClassNames } from '@elton-okawa/commons';
import { Button } from '@elton-okawa/button';
import { Flex } from '@elton-okawa/flex';
import styles from './styles.module.css';
import { useDrawerState } from './DrawerContext';
import { NavHide } from './NavHide';

export interface NavItemProps {
  startIcon: ReactElement;
  endIcon?: ReactElement;
  label: string;
  selected?: boolean;
}

export function NavItem({
  startIcon,
  endIcon,
  label,
  selected = false,
}: NavItemProps) {
  const open = useDrawerState();

  return (
    <Button
      variant={selected ? 'filled' : 'text'}
      extraClasses={[styles.navItem, !open ? styles.collapsed : '']}
    >
      {startIcon}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        extraClasses={[styles.grow]}
      >
        <NavHide>
          <Typography>{label}</Typography>
          {endIcon}
        </NavHide>
      </Flex>
    </Button>
  );
}
