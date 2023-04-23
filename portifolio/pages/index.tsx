import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Typography from '@elton-okawa/typography';
import { Avatar } from '@elton-okawa/avatar';
import { Card } from '@elton-okawa/card';
import { Emoji } from '@elton-okawa/emoji';
import { Flex } from '@elton-okawa/flex';
import profilePicture from '../public/profile.jpg';
import { ContactLinks } from '../components/contact-links';
import { FullPageScroll } from '@elton-okawa/full-page-scroll';
import { Container } from '@elton-okawa/container';

export default function Home() {
  return (
    <>
      <main>
        <FullPageScroll
          sections={[
            {
              id: 'experience',
              title: 'Experience',
              content: renderExperience(),
            },
            {
              id: 'showcase',
              title: 'Showcase',
              content: <p>Showcase</p>,
            },
            {
              id: 'contact',
              title: 'Contacts',
              content: <p>Contacts</p>,
            },
          ]}
        />
      </main>
    </>
  );
}

function renderExperience() {
  return (
    <Container size="large">
      <Flex
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        extraClasses={[styles.experience]}
        gap={1}
      >
        <Typography variant="h6">Hi, I'm</Typography>
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
            + years of working experience
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
          <span className={styles.emphasis}>
            lifelong learning, empathy, continuous feedback and work-life
            balance.
          </span>
        </Typography>
      </Flex>
    </Container>
  );
}
