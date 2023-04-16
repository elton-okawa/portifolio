import React from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export type ButtonVariant = 'text' | 'outlined' | 'filled';

export interface ButtonProps {
  variant?: ButtonVariant;
  children: string;
  onClick: () => void;
}

export function Button({ variant = 'text', ...props }: ButtonProps) {
  return (
    <button
      className={mergeClassNames(styles.button, styles.ripple, styles[variant])}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}

export default Button;
