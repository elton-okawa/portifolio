import React, { ReactNode } from 'react';
import styles from './styles.module.css';

export type IconButtonVariant = 'text' | 'filled';

export interface IconButtonProps {
  variant: IconButtonVariant;
  icon: ReactNode;
  onClick: () => void;
}

export function IconButton({ variant = 'text', ...props }: IconButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={() => props.onClick()}
    >
      {props.icon}
    </button>
  );
}

export default IconButton;
