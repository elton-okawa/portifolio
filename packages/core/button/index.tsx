import React from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export type ButtonVariant = 'text' | 'outlined' | 'filled';
export type ButtonType = 'submit';

export interface ButtonProps {
  variant?: ButtonVariant;
  type?: ButtonType;
  extraClasses?: string[];
  children: string;
  onClick: () => void;
}

export function Button({
  variant = 'text',
  extraClasses = [],
  ...props
}: ButtonProps) {
  return (
    <button
      className={mergeClassNames(
        styles.button,
        styles.ripple,
        styles[variant],
        ...extraClasses
      )}
      onClick={() => props.onClick()}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

export default Button;
