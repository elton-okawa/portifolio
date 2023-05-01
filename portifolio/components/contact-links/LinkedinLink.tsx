import React from 'react';
import { LinkedinIcon } from '@elton-okawa/icons';
import { Link } from '@elton-okawa/link';

import styles from './ContactLinks.module.css';
import { LINKEDIN_URL } from 'lib/constants';

export function LinkedinLink() {
  return (
    <Link href={LINKEDIN_URL}>
      <LinkedinIcon size="extraLarge" extraClasses={[styles.contact]} />
    </Link>
  );
}
