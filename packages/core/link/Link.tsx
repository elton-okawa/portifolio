import React, { ReactNode } from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';

import styles from './Link.module.css';

export interface LinkProps extends ExtraProps {
  children: ReactNode;
  href: string;
}

export function Link({ children, href, extraClasses = [] }: LinkProps) {
  return (
    <a
      target="_blank"
      href={href}
      rel="noreferrer noopener"
      className={mergeClassNames(styles.link, ...extraClasses)}
    >
      {children}
    </a>
  );
}
