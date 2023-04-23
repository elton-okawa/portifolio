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

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <FullPageScroll
          sections={[
            {
              id: 'experience',
              title: 'Experience',
              content: <p>Experience</p>,
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
