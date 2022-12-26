import React, { ReactNode } from 'react';
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
      className={`${styles.button} ${styles[variant]}`}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}

export default IconButton;
