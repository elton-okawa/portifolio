import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';
import styles from './styles.module.css';

type AvatarSize = 'small' | 'medium' | 'large' | 'container';

export interface AvatarProps {
  size?: AvatarSize;
  children: ReactNode;
}

export function Avatar({ size = 'medium', ...props }: AvatarProps) {
  return (
    <div className={mergeClassNames(styles.avatar, styles[size])}>
      {props.children}
    </div>
  );
}

export default Avatar;
