import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '@elton-okawa/commons';
import { Section } from './Section';

interface SectionData {
  id: string;
  title: string;
  content: ReactNode;
}

interface FullPageScrollProps {
  sections: SectionData[];
  extraClasses?: string[];
}

export function FullPageScroll({
  sections,
  extraClasses = [],
}: FullPageScrollProps) {
  const [active, setActive] = useState(sections[0].id);

  return (
    <div className={mergeClassNames(styles.container, ...extraClasses)}>
      <div className={styles.indicator}>
        {sections.map(({ id, title }) => (
          <a
            key={id}
            className={active === id ? styles.active : ''}
            href={`#${id}`}
            data-title={title}
          />
        ))}
      </div>
      {sections.map(({ id, content }) => {
        return (
          <Section key={id} id={id} onVisible={() => setActive(id)}>
            {content}
          </Section>
        );
      })}
    </div>
  );
}
