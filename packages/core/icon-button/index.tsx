import React from 'react';
import { Button, ButtonProps } from '@elton-okawa/button';

import styles from './styles.module.css';

export function IconButton({
  variant = 'filled',
  type,
  ...props
}: ButtonProps) {
  return (
    <Button
      extraClasses={[styles.iconButton, styles[variant]]}
      onClick={props.onClick}
      type={type}
    >
      {props.children}
    </Button>
  );
}

export default IconButton;
