import React, { useState } from 'react';
import Flex from '@elton-okawa/flex';
import { Button } from '@elton-okawa/button';
import styles from './ExperienceTable.module.css';
import { Detail } from './Detail';
import { Item } from './Item';

export interface ExperienceData {
  id: string;
  name: string;
  role: string;
  companyWebsite: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export interface ExperienceTableProps {
  experience: ExperienceData[];
}

export function ExperienceTable({ experience }: ExperienceTableProps) {
  const [selected, setSelected] = useState(experience[0]);

  return (
    <Flex gap={2} extraClasses={[styles.container]}>
      <Flex direction="column">
        {experience.map((data) => (
          <Item
            key={data.id}
            selected={selected.id === data.id}
            onClick={() => setSelected(data)}
          >
            {data.name}
          </Item>
        ))}
      </Flex>
      <Detail
        name={selected.name}
        role={selected.role}
        companyWebsite={selected.companyWebsite}
        startDate={selected.startDate}
        endDate={selected.endDate}
        description={selected.description}
      />
    </Flex>
  );
}
