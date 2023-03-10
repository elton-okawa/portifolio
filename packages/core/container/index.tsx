import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';
import styles from './styles.module.css';

type ContainerSize = 'small' | 'medium' | 'large';

export interface ContainerProps {
  size?: ContainerSize;
  children: ReactNode;
}

export function Container({ size = 'medium', ...props }: ContainerProps) {
  return (
    <div className={mergeClassNames(styles.container, styles[size])}>
      {props.children}
    </div>
  );
}

export default Container;
