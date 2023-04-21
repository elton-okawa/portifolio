import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '@elton-okawa/commons';

interface SectionProps {
  children: ReactNode;
  extraClasses?: string[];
}

export function Section({ children, extraClasses = [] }: SectionProps) {
  return (
    <section className={mergeClassNames(styles.section, ...extraClasses)}>
      {children}
    </section>
  );
}
