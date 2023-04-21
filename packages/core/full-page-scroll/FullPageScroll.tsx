import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '@elton-okawa/commons';

interface FullPageScrollProps {
  children: ReactNode;
  extraClasses?: string[];
}

export function FullPageScroll({
  children,
  extraClasses = [],
}: FullPageScrollProps) {
  return (
    <div className={mergeClassNames(styles.container, ...extraClasses)}>
      {children}
    </div>
  );
}
