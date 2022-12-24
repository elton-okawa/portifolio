import React from 'react';

import styles from './styles.module.css';

import ThirdPartyIcon from '@mdi/react';
export * from '@mdi/js';

export interface IconProps {
  size?: 'small' | 'medium' | 'large';
  icon: string;
  color?: 'primary' | 'secondary' | 'text' | 'disabled';
}

export function Icon({ icon, size = 'medium', color = 'text' }: IconProps) {
  return (
    <ThirdPartyIcon
      path={icon}
      className={`${styles[size]} ${styles[color]}`}
    />
  );
}
