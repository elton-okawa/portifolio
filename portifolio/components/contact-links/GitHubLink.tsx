import React from 'react';
import { GitHubIcon } from '@elton-okawa/icons';
import { Link } from '@elton-okawa/link';

import styles from './ContactLinks.module.css';

export function GitHubLink() {
  return (
    <Link href="https://github.com/elton-okawa">
      <GitHubIcon size="extraLarge" extraClasses={[styles.contact]} />
    </Link>
  );
}
