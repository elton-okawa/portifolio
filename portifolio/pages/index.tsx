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
      >
        <Typography variant="h6">Hi, I'm</Typography>
        <span>
          <Typography variant="h3" extraClasses={[styles.typewriter]}>
            Elton Yoshio Okawa
          </Typography>
        </span>
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
        <Typography extraClasses={[styles.summary]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          velit mi. Sed non massa urna. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Nullam mi
          ante, pharetra porttitor dapibus at, cursus non nibh. Proin quam nisi,
          ultrices non tortor non, hendrerit semper tortor. Aliquam vitae tempus
          justo. Nam ultrices sapien et ipsum viverra cursus. Cras nunc enim,
          ornare non molestie ut, malesuada at metus.
        </Typography>
      </Flex>
    </Container>
  );
}
