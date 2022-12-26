import React, { ReactNode } from 'react';
import styles from './styles.module.css';

type AvatarSize = 'small' | 'medium' | 'large' | 'container';

export interface AvatarProps {
  size?: AvatarSize;
  children: ReactNode;
}

export function Avatar({ size = 'medium', ...props }: AvatarProps) {
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>{props.children}</div>
  );
}

export default Avatar;
