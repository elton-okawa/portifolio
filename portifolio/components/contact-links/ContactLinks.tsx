import React from 'react';

import styles from './ContactLinks.module.css';
import { GitHubLink } from './GitHubLink';
import { LinkedinLink } from './LinkedinLink';

export function ContactLinks() {
  return (
    <div className={styles.container}>
      <LinkedinLink />
      <GitHubLink />
    </div>
  );
}
