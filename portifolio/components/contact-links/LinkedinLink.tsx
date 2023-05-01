import React from 'react';
import { LinkedinIcon } from '@elton-okawa/icons';
import { Link } from '@elton-okawa/link';

import styles from './ContactLinks.module.css';

export function LinkedinLink() {
  return (
    <Link href="https://www.linkedin.com/in/elton-okawa/">
      <LinkedinIcon size="extraLarge" extraClasses={[styles.contact]} />
    </Link>
  );
}
