import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './Button.module.css';

export type ButtonVariant = 'text' | 'outlined' | 'filled';
export type ButtonType = 'submit';

export interface ButtonProps {
  variant?: ButtonVariant;
  type?: ButtonType;
  extraClasses?: string[];
  children: ReactNode;
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultClick = () => {};

export function Button({
  variant = 'text',
  onClick = defaultClick,
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
      onClick={onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

export default Button;
