import React, { useState } from 'react';
import Flex from '@elton-okawa/flex';
import Button from '@elton-okawa/button';
import { Detail } from './Detail';

export interface ExperienceData {
  id: string;
  name: string;
  description: string;
}

export interface ExperienceTableProps {
  experience: ExperienceData[];
}

export function ExperienceTable({ experience }: ExperienceTableProps) {
  const [selected, setSelected] = useState(experience[0]);

  return (
    <Flex>
      <Flex direction="column">
        {experience.map((data) => (
          <Button key={data.id} onClick={() => setSelected(data)}>
            {data.name}
          </Button>
        ))}
      </Flex>
      <Detail name={selected.name} description={selected.description} />
    </Flex>
  );
}
