import React from 'react';
import { GitHubIcon } from '@elton-okawa/icons';
import { Link } from '@elton-okawa/link';

import styles from './ContactLinks.module.css';
import { GITHUB_URL } from 'lib/constants';

export function GitHubLink() {
  return (
    <Link href={GITHUB_URL}>
      <GitHubIcon size="extraLarge" extraClasses={[styles.contact]} />
    </Link>
  );
}
