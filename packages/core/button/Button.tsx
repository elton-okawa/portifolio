import React, { ReactNode } from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';

import styles from './Button.module.css';

export type ButtonVariant = 'text' | 'outlined' | 'filled';
export type ButtonShape = 'rounded' | 'square';
export type ButtonType = 'submit';

export interface ButtonProps extends ExtraProps {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  type?: ButtonType;
  children: ReactNode;
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultClick = () => {};

export function Button({
  variant = 'text',
  shape = 'rounded',
  onClick = defaultClick,
  extraClasses = [],
  ...props
}: ButtonProps) {
  return (
    <button
      className={mergeClassNames(
        styles.button,
        styles[variant],
        styles[shape],
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
