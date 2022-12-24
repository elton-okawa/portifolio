import React from 'react';
import { useDrawerApi } from './DrawerContext';

export function DrawerButton() {
  const setOpen = useDrawerApi();

  return <button onClick={() => setOpen((open) => !open)}>Toggle</button>;
}
