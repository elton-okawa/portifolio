import React, { ReactNode } from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';
import styles from './styles.module.css';

type ContainerSize = 'small' | 'medium' | 'large';

export interface ContainerProps {
  size?: ContainerSize;
  children: ReactNode;
}

export function Container({
  size = 'medium',
  children,
  extraClasses = [],
  ...props
}: ContainerProps & ExtraProps) {
  return (
    <div
      className={mergeClassNames(
        styles.container,
        styles[size],
        ...extraClasses
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
