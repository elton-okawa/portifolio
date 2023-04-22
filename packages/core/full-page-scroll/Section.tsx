import React, { ReactNode, forwardRef } from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '@elton-okawa/commons';

interface SectionProps {
  id: string;
  children: ReactNode;
  extraClasses?: string[];
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, extraClasses = [] }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={mergeClassNames(styles.section, ...extraClasses)}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';
