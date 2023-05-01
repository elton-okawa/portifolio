import React, { ReactNode } from 'react';

import { useDrawerState } from './DrawerContext';

interface NavHideProps {
  children: ReactNode;
}

export function NavHide({ children }: NavHideProps) {
  const open = useDrawerState();
  return <>{open ? children : null}</>;
}
