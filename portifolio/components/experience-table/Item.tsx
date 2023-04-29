import { mergeClassNames } from '@elton-okawa/commons';
import React from 'react';

import styles from './ExperienceTable.module.css';

export interface ItemProps {
  selected: boolean;
  children: string;
  onClick: () => void;
}

export function Item({ selected, onClick, children }: ItemProps) {
  return (
    <button
      className={mergeClassNames(styles.item, selected ? styles.selected : '')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
