import React, { ReactNode, useRef, useEffect, useCallback } from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '@elton-okawa/commons';

interface SectionProps {
  id: string;
  children: ReactNode;
  onVisible: () => void;
  extraClasses?: string[];
}

export function Section({
  id,
  children,
  onVisible,
  extraClasses = [],
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const handleVisibility = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        onVisible();
      }
    },
    [onVisible]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.8,
    });
    const node = sectionRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [handleVisibility]);

  return (
    <section
      id={id}
      className={mergeClassNames(styles.section, ...extraClasses)}
      ref={sectionRef}
    >
      {children}
    </section>
  );
}
