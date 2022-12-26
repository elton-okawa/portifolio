import React from 'react';

import styles from './styles.module.css';

import ThirdPartyIcon from '@mdi/react';
import { mdiHome, mdiAccount } from '@mdi/js';

export interface IconProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'text' | 'disabled';
}

interface GenericIconProps {
  icon: string;
}

export function Icon({
  icon,
  size = 'medium',
  color = 'text',
}: GenericIconProps & IconProps) {
  return (
    <ThirdPartyIcon
      path={icon}
      className={`${styles[size]} ${styles[color]}`}
    />
  );
}

export const HomeIcon = (props: IconProps) => (
  <Icon icon={mdiHome} {...props} />
);
export const AccountIcon = (props: IconProps) => (
  <Icon icon={mdiAccount} {...props} />
);
