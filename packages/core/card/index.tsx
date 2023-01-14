import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export type CardVariant = 'elevated' | 'filled' | 'outlined';

export interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
}

export function Card({ variant = 'elevated', ...props }: CardProps) {
  return (
    <div className={mergeClassNames(styles.card, styles[variant])}>
      {props.children}
    </div>
  );
}

export default Card;
