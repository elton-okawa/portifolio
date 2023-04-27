import Container from '@elton-okawa/container';
import Flex from '@elton-okawa/flex';
import Typography from '@elton-okawa/typography';
import { ContactLinks } from 'components/contact-links';
import React from 'react';
import styles from 'styles/Home.module.css';

export function Contacts() {
  return (
    <Container>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
        extraClasses={[styles.container]}
      >
        <Typography variant="h3" extraClasses={[styles.emphasisPrimary]}>
          Get In Touch
        </Typography>
        <ContactLinks />

        <br />
        <Typography>Designed and Built by Elton Okawa</Typography>
        <a
          target="_blank"
          href="https://github.com/elton-okawa/portifolio"
          rel="noreferrer noopener"
          className={styles.sourceCode}
        >
          <Typography>Check it out!</Typography>
        </a>
      </Flex>
    </Container>
  );
}
