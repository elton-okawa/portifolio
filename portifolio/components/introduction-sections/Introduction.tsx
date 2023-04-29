import React from 'react';

import { Typography } from '@elton-okawa/typography';
import { Flex } from '@elton-okawa/flex';
import { Container } from '@elton-okawa/container';

import styles from 'styles/Home.module.css';

export function Introduction() {
  return (
    <Container size="large">
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        extraClasses={[styles.experience]}
        gap={1}
      >
        <Typography variant="h6">{"Hi, I'm"}</Typography>
        <span>
          <Typography
            variant="h2"
            extraClasses={[styles.typewriter, styles.name]}
          >
            Elton Yoshio Okawa
          </Typography>
        </span>
        <span>
          <Typography variant="h3" extraClasses={[styles.slideInUp]}>
            Full Stack Software Developer with
          </Typography>
          <Typography
            variant="h3"
            extraClasses={[
              styles.delayFirst,
              styles.slideInUp,
              styles.workingExperience,
            ]}
          >
            <span className={styles.emphasisPrimary}>+ years</span> of working
            experience
          </Typography>
        </span>
        <br />
        <Typography extraClasses={[styles.summary]}>
          I like to write clean software code with automated tests that deliver
          value and solve real world problems. I also believe that I can learn a
          lot from my co-workers and help them to improve.
        </Typography>
        <Typography extraClasses={[styles.summary]}>
          My values:{' '}
          <span className={styles.emphasisSecondary}>
            lifelong learning, empathy, continuous feedback and work-life
            balance.
          </span>
        </Typography>
      </Flex>
    </Container>
  );
}
