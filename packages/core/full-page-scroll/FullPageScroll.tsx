import React, {
  ReactNode,
  useRef,
  createRef,
  useEffect,
  useState,
} from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '@elton-okawa/commons';
import { Section } from './Section';

interface FullPageScrollProps {
  children: ReactNode[];
  extraClasses?: string[];
}

export function FullPageScroll({
  children,
  extraClasses = [],
}: FullPageScrollProps) {
  const sectionRefs = useRef(children.map(() => createRef<HTMLElement>()));
  const [active, setActive] = useState('0');

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold: 0.8 });

    sectionRefs.current.map((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.map((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  });

  return (
    <div className={mergeClassNames(styles.container, ...extraClasses)}>
      <div className={styles.indicator}>
        {Array.from({ length: children.length }, (_, index) => (
          <a
            key={index}
            onClick={() => sectionRefs.current[index].current?.scrollIntoView()}
            className={active === index.toString() ? styles.active : ''}
            href={`#${index}`}
          />
        ))}
      </div>
      {children.map((child, index) => {
        return (
          <Section
            key={index}
            id={index.toString()}
            ref={sectionRefs.current[index]}
          >
            {child}
          </Section>
        );
      })}
    </div>
  );
}
