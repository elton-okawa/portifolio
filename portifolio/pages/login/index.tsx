import React from 'react';

import Container from '@elton-okawa/container';
import styles from './styles.module.css';
import Flex from '@elton-okawa/flex';
import Button from '@elton-okawa/button';
import Typography from '@elton-okawa/typography';

export default function LoginPage() {
  return (
    <Container extraClasses={[styles.container]}>
      <Flex direction='column'>
        <Typography>Fake login</Typography>
        <Button variant='filled' onClick={() => { console.log('test') }}>Dog</Button>
      </Flex>
    </Container>
  );
} 