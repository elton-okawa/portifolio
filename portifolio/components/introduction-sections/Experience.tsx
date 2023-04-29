import React from 'react';

import Container from '@elton-okawa/container';
import { Typography } from '@elton-okawa/typography';

import { TechStackItem, TechStackItemProps } from 'components/tech-stack-item';
import styles from 'styles/Home.module.css';
import Flex from '@elton-okawa/flex';
import { ExperienceTable, ExperienceData } from 'components/experience-table';

export type { ExperienceData };

const stackItems: TechStackItemProps[] = [
  {
    title: 'Node.js',
    experienceYears: 3,
  },
  {
    title: 'React',
    experienceYears: 2,
  },
  {
    title: 'GCP',
    experienceYears: 2,
  },
];

interface ExperienceProps {
  experience: ExperienceData[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <Container>
      <Flex direction="column" gap={3}>
        <Typography variant="h2" color="primary">
          Experience
        </Typography>
        {renderMainStack()}
        <ExperienceTable experience={experience} />
      </Flex>
    </Container>
  );
}

function renderMainStack() {
  return (
    <Flex gap={3} alignItems="center">
      <Typography>Main Stack</Typography>
      {stackItems.map((data) => (
        <TechStackItem key={data.title} {...data} />
      ))}
    </Flex>
  );
}
