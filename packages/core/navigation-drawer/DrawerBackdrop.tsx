import React from 'react';
import { Backdrop } from '../backdrop';
import { useDrawerState } from './DrawerContext';

export function DrawerBackdrop() {
  const open = useDrawerState();

  return open ? <Backdrop /> : null;
}
