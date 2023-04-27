import Flex from '@elton-okawa/flex';
import React from 'react';
import { Emoji } from '@elton-okawa/emoji';
import Typography from '@elton-okawa/typography';
import styles from 'styles/Home.module.css';
import Container from '@elton-okawa/container';

interface UnderConstructionProps {
  title: string;
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <Container>
      <Flex
        direction="column"
        alignItems="center"
        gap={2}
        extraClasses={[styles.underConstruction]}
      >
        <Flex alignItems="center" gap={3}>
          <Typography variant="h3">{title}</Typography>
          <Emoji label="under construction" size="large">
            🚧
          </Emoji>
        </Flex>
        <Typography>Under construction...</Typography>
      </Flex>
    </Container>
  );
}
