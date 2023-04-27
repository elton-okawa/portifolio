import React from 'react';
import styles from './Emoji.module.css';

export type EmojiSize = 'small' | 'medium' | 'large' | 'extraLarge';

export interface EmojiProps {
  label: string;
  children: string;
  size?: EmojiSize;
}

export function Emoji({ label, children, size = 'medium' }: EmojiProps) {
  return (
    <span role="img" aria-label={label} className={styles[size]}>
      {children}
    </span>
  );
}

export default Emoji;
