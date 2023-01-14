import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export type IconButtonVariant = 'text' | 'filled';

export interface IconButtonProps {
  variant?: IconButtonVariant;
  children: ReactNode;
  onClick: () => void;
}

export function IconButton({ variant = 'filled', ...props }: IconButtonProps) {
  return (
    <button
      className={mergeClassNames(styles.button, styles[variant])}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}

export default IconButton;
