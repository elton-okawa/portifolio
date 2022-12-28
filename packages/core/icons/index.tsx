import React from 'react';

import styles from './styles.module.css';

import ThirdPartyIcon from '@mdi/react';
import {
  mdiHome,
  mdiAccount,
  mdiChevronRight,
  mdiChevronLeft,
  mdiLinkedin,
  mdiGithub,
} from '@mdi/js';

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
export const ChevronRightIcon = (props: IconProps) => (
  <Icon icon={mdiChevronRight} {...props} />
);
export const ChevronLeftIcon = (props: IconProps) => (
  <Icon icon={mdiChevronLeft} {...props} />
);
export const LinkedinIcon = (props: IconProps) => (
  <Icon icon={mdiLinkedin} {...props} />
);
export const GitHubIcon = (props: IconProps) => (
  <Icon icon={mdiGithub} {...props} />
);
