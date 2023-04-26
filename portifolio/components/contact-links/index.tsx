import React from 'react';

import styles from './styles.module.css';
import { GitHubIcon, LinkedinIcon } from '@elton-okawa/icons';

export function ContactLinks() {
  return (
    <div className={styles.container}>
      <a
        href="https://www.linkedin.com/in/elton-okawa/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedinIcon size="extraLarge" extraClasses={[styles.contact]} />
      </a>
      <a
        href="https://github.com/elton-okawa"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GitHubIcon size="extraLarge" extraClasses={[styles.contact]} />
      </a>
    </div>
  );
}
