import React from 'react';

import styles from './styles.module.css';
import { GitHubIcon, LinkedinIcon } from '@elton-okawa/icons';

export function ContactLinks() {
  return (
    <div className={styles.contact}>
      <a
        href="https://www.linkedin.com/in/elton-okawa/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon size="large" />
      </a>
      <a href="https://github.com/elton-okawa" target="_blank" rel="noreferrer">
        <GitHubIcon size="large" />
      </a>
    </div>
  );
}
