import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export type IconButtonVariant = 'text' | 'filled';
export type IconButtonType = 'submit';

export interface IconButtonProps {
  variant?: IconButtonVariant;
  type?: IconButtonType;
  onClick?: () => void;
  children: ReactNode;
}

export function IconButton({
  variant = 'filled',
  type,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={mergeClassNames(styles.button, styles[variant])}
      onClick={props.onClick}
      type={type}
    >
      {props.children}
    </button>
  );
}

export default IconButton;
