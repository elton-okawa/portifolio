import React from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

import ThirdPartyIcon from '@mdi/react';
import {
  mdiHome,
  mdiAccount,
  mdiChevronRight,
  mdiChevronLeft,
  mdiLinkedin,
  mdiGithub,
  mdiBriefcase,
  mdiInformation,
  mdiSend,
} from '@mdi/js';

export interface IconProps extends ExtraProps {
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  color?: 'primary' | 'secondary' | 'text' | 'disabled';
}

interface GenericIconProps {
  icon: string;
}

export function Icon({
  icon,
  size = 'medium',
  color = 'text',
  extraClasses = [],
}: GenericIconProps & IconProps) {
  return (
    <ThirdPartyIcon
      path={icon}
      className={mergeClassNames(styles[size], styles[color], ...extraClasses)}
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
export const BriefcaseIcon = (props: IconProps) => (
  <Icon icon={mdiBriefcase} {...props} />
);
export const InformationIcon = (props: IconProps) => (
  <Icon icon={mdiInformation} {...props} />
);
export const SendIcon = (props: IconProps) => (
  <Icon icon={mdiSend} {...props} />
);
