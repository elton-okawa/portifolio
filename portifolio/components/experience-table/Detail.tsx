import React from 'react';
import Typography from '@elton-okawa/typography';
import { Flex } from '@elton-okawa/flex';

interface DetailProps {
  name: string;
  description: string;
}

export function Detail({ name, description }: DetailProps) {
  return (
    <Flex direction="column">
      <Typography variant="h6">{name}</Typography>
      <Typography>{description}</Typography>
    </Flex>
  );
}
