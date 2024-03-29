import React, { useState } from 'react';
import Flex from '@elton-okawa/flex';
import { Button } from '@elton-okawa/button';
import styles from './ExperienceTable.module.css';
import { Detail } from './Detail';
import { Item } from './Item';
import { useControllableFadeIn } from 'hooks';

export interface ExperienceData {
  id: string;
  name: string;
  role: string;
  companyWebsite: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string[];
  technologies: string[];
}

export interface ExperienceTableProps {
  experience: ExperienceData[];
}

export function ExperienceTable({ experience }: ExperienceTableProps) {
  const [selected, setSelected] = useState(experience[0]);
  const { fadeClass, startFade } = useControllableFadeIn();

  return (
    <Flex gap={2} extraClasses={[styles.container]}>
      <Flex direction="column" extraClasses={[styles.itemContainer]}>
        {experience.map((data) => (
          <Item
            key={data.id}
            selected={selected.id === data.id}
            onClick={() => {
              // skip if nothing change in order to avoid fading
              if (selected.id === data.id) return;

              startFade();
              setSelected(data);
            }}
          >
            {data.name}
          </Item>
        ))}
      </Flex>
      <span className={fadeClass}>
        <Detail
          name={selected.name}
          role={selected.role}
          companyWebsite={selected.companyWebsite}
          location={selected.location}
          startDate={selected.startDate}
          endDate={selected.endDate}
          description={selected.description}
          technologies={selected.technologies}
        />
      </span>
    </Flex>
  );
}
